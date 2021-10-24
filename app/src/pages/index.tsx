import type { NextPage, GetStaticProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import CustomError from "../lib/customError";
import getBooks from "../lib/getBooks";
import BooksResponse from "../types/BooksResponse";

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
      <ul>
        {data?.results.map((book) => (
          <li key={book.objectId}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
