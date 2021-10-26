import { BookResponse, BooksResponse } from "../types/api";
import CustomError from "./customError";

export const getBooks = async (): Promise<BooksResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/books`);

  if (response.status === 200) {
    return await response.json();
  }

  throw new CustomError("Algo inesperado aconteceu");
};

export const getBook = async (id: string): Promise<BookResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/book/${id}`
  );

  if (response.status === 200) {
    return await response.json();
  }

  throw new CustomError("Algo inesperado aconteceu");
};
