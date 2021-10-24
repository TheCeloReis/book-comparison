import React, { FC } from "react";
import Link from "next/link";

import { Book } from "../../types/BooksResponse";

import * as S from "./BookListItem.styled";
import StarRating from "../StarRating";

interface Props {
  book: Book;
}

const BookListItem: FC<Props> = ({ book }) => {
  return (
    <S.ListItem>
      <Link
        href={{
          pathname: "/livro/[isbn]",
          query: { isbn: book.isbn },
        }}
      >
        <S.Link>
          <S.CoverContainer>
            <S.Cover src={book.cover.url} alt="" />
          </S.CoverContainer>

          <div>
            <S.Title>{book.name}</S.Title>

            <S.Author>por {book.author}</S.Author>
            <S.Edition>{book.edition}</S.Edition>

            <StarRating
              numRatings={book.numRatings}
              totalRatings={book.totalRatings}
            />
          </div>
        </S.Link>
      </Link>
    </S.ListItem>
  );
};

export default BookListItem;
