import type { NextPage, GetStaticProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
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
    <div>
      <BookList books={data?.results ?? []} />
    </div>
  );
};

export default Home;
