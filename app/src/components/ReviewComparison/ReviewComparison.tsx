import React from "react";
import { Book } from "../../types/api";
import StarRating from "../StarRating";

import * as S from "./ReviewComparison.styled";

interface Props {
  book: Book;
}

const ReviewComparison: React.FC<Props> = ({ book }) => {
  return (
    <S.Container>
      <h2>Avaliações</h2>

      <S.Table>
        <S.TableHead>
          <tr>
            <th></th>
            <th>
              <S.Logo src="/img/tag-logo.png" alt="Tag" />
            </th>
            <th>
              <S.Logo src="/img/goodreads-logo.png" alt="GoodReads" />
            </th>
          </tr>
        </S.TableHead>
        <S.TableBody>
          <tr>
            <td>Número de Avaliações</td>

            <td>
              <S.RatingCount>{book.numRatings}</S.RatingCount>
            </td>
            <td>
              <S.RatingCount>
                {book.goodReads?.ratings_count ?? 0}
              </S.RatingCount>
            </td>
          </tr>
          <S.TableRatingRow>
            <td>Média de Avaliações</td>
            <td>
              <div>
                <StarRating
                  hideValue
                  numRatings={book.numRatings}
                  totalRatings={book.totalRatings}
                />
                <S.RatingText>
                  {(book.totalRatings / book.numRatings).toFixed(2)}
                </S.RatingText>
              </div>
            </td>

            <td>
              <div>
                <StarRating
                  hideValue
                  numRatings={book.goodReads ? book.goodReads.ratings_count : 0}
                  totalRatings={
                    book.goodReads
                      ? book.goodReads.ratings_count *
                        +book.goodReads.average_rating
                      : 0
                  }
                />
                <S.RatingText>
                  {book.goodReads?.average_rating ?? 0}
                </S.RatingText>
              </div>
            </td>
          </S.TableRatingRow>
        </S.TableBody>
      </S.Table>
    </S.Container>
  );
};

export default ReviewComparison;
