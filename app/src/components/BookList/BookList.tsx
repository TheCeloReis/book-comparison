import React, { FC } from "react";

import { Book } from "../../types/BooksResponse";
import BookListItem from "../BookListItem";

import * as S from "./BookList.styled";

interface Props {
  books: Array<Book>;
}

const BookList: FC<Props> = ({ books }) => {
  return (
    <S.List>
      {books.map((book) => (
        <BookListItem key={book.objectId} book={book} />
      ))}
    </S.List>
  );
};

export default BookList;
