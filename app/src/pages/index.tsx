import type { NextPage, GetStaticProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Head from "next/head";

import BookList from "../components/BookList";
import CustomError from "../lib/customError";
import getBooks from "../lib/getBooks";
import { BooksResponse } from "../types/api";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("books", getBooks);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Home: NextPage = () => {
  const { data } = useQuery<BooksResponse, CustomError>("books", getBooks, {
    refetchOnMount: false,
  });

  return (
    <>
      <Head>
        <title>BookParison - Avalie avaliações de livros</title>
        <meta
          name="description"
          content="Avalie avaliações de livros de forma simples e rápida, sem sair do nosso app."
        />
      </Head>
      <BookList books={data?.results ?? []} />
    </>
  );
};

export default Home;
