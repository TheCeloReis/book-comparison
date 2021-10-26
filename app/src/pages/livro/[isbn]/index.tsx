import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";

import { getBook, getBooks } from "../../../lib/api";

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

  return <div></div>;
};

export default Home;
