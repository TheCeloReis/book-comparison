import { BooksResponse } from "../types/api";
import CustomError from "./customError";

const getBooks = async (): Promise<BooksResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/books`);

  if (response.status === 200) {
    return await response.json();
  }

  throw new CustomError("Algo inesperado aconteceu");
};

export default getBooks;
