import React from "react";
import StarRating from ".";
import { render, screen } from "../../lib/test.utils";

describe("<StarRating />", () => {
  it("render five stars", () => {
    render(<StarRating numRatings={1} totalRatings={5} />);

    expect(screen.queryAllByTestId("full-star")).toHaveLength(5);
    expect(screen.queryAllByTestId("half-star")).toHaveLength(0);
    expect(screen.queryAllByTestId("empty-star")).toHaveLength(0);
  });

  it("render one star", () => {
    render(<StarRating numRatings={1} totalRatings={1} />);

    expect(screen.queryAllByTestId("full-star")).toHaveLength(1);
    expect(screen.queryAllByTestId("half-star")).toHaveLength(0);
    expect(screen.queryAllByTestId("empty-star")).toHaveLength(4);
  });

  it("render thre and half stars", () => {
    render(<StarRating numRatings={1} totalRatings={3.5} />);

    expect(screen.queryAllByTestId("full-star")).toHaveLength(3);
    expect(screen.queryAllByTestId("half-star")).toHaveLength(1);
    expect(screen.queryAllByTestId("empty-star")).toHaveLength(1);
  });
});
