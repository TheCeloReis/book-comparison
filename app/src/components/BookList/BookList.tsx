import React, { FC } from "react";
import sortByDateString from "../../lib/sortByDateString";

import { Book } from "../../types/BooksResponse";
import BookListItem from "../BookListItem";

import * as S from "./BookList.styled";

interface Props {
  books: Array<Book>;
}

const BookList: FC<Props> = ({ books }) => {
  const sortedBooks = sortByDateString(books, "edition");

  return (
    <S.List>
      {sortedBooks.map((book) => (
        <BookListItem key={book.objectId} book={book} />
      ))}
    </S.List>
  );
};

export default BookList;
