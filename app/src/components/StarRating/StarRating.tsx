import React from "react";
import { Star } from "@styled-icons/material/Star";
import { StarBorder } from "@styled-icons/material/StarBorder";
import { StarHalf } from "@styled-icons/material/StarHalf";

import * as S from "./StarRating.styled";

interface Props {
  numRatings: number;
  totalRatings: number;
  hideValue?: boolean;
}

const StarRating: React.FC<Props> = (props) => {
  const rating =
    props.numRatings !== 0 ? props.totalRatings / props.numRatings : 0;

  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <S.Container>
      <S.StarContainer>
        {[...Array(fullStars)].map((_, index) => (
          <Star size="1rem" key={index} data-testid="full-star" />
        ))}
        {[...Array(halfStars)].map((_, index) => (
          <StarHalf size="1rem" key={index} data-testid="half-star" />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <StarBorder size="1rem" key={index} data-testid="empty-star" />
        ))}
      </S.StarContainer>
      {props.hideValue ? null : (
        <S.StarValue> {rating.toFixed(2)} / 5</S.StarValue>
      )}
    </S.Container>
  );
};

export default StarRating;
