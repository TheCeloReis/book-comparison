import React from "react";
import { Book } from "../../types/api";

import * as S from "./BookDetails.styled";

interface Props {
  book: Book;
}

const BookDetails: React.FC<Props> = ({ book }) => {
  return (
    <S.Container>
      <S.CoverImg src={book.cover.url} alt="" />
      <div>
        <S.Title>{book.name}</S.Title>
        <S.Author>por {book.author}</S.Author>

        <S.Details>
          <h2>Detalhes do Livro</h2>

          <S.DetailsList>
            <S.DetailsListItem>
              <S.DetailsListItemLabel>Edição: </S.DetailsListItemLabel>
              {book.edition}
            </S.DetailsListItem>
            <S.DetailsListItem>
              <S.DetailsListItemLabel>Curador(a): </S.DetailsListItemLabel>
              {book.curator}
            </S.DetailsListItem>
            <S.DetailsListItem>
              <S.DetailsListItemLabel>Páginas: </S.DetailsListItemLabel>
              {book.pages}
            </S.DetailsListItem>
          </S.DetailsList>
        </S.Details>
      </div>
    </S.Container>
  );
};

export default BookDetails;
