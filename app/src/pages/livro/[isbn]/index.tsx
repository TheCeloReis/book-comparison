import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import Head from "next/head";

import { getBook, getBooks } from "../../../lib/api";
import BookDetails from "../../../components/BookDetails";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["book", params!.isbn], () =>
    getBook(params!.isbn as string)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const books = await getBooks();

  return {
    paths: books.results.map((book) => ({
      params: {
        isbn: book.isbn,
      },
    })),
    fallback: false,
  };
};

const Home: NextPage = () => {
  const router = useRouter();

  const { data } = useQuery(["book", router.query.isbn], () =>
    getBook(router.query.isbn as string)
  );

  if (!data?.result) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>BookParison - {data.result.name}</title>
        <meta
          name="description"
          content="Avalie avaliações de livros de forma simples e rápida, sem sair do nosso app."
        />
      </Head>
      <BookDetails book={data.result} />
    </div>
  );
};

export default Home;
