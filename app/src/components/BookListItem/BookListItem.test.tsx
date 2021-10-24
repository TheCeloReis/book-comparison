import React from "react";
import { render, screen } from "../../lib/test.utils";
import { Book } from "../../types/BooksResponse";

import BookListItem from ".";

const BOOK: Book = {
  objectId: "SPYNZAD557",
  pages: 383,
  createdAt: "2017-05-08T14:47:49.508Z",
  updatedAt: "2017-07-03T14:20:23.000Z",
  author: "Giuseppe Tomasi de Lampedusa",
  name: "O Leopardo",
  isbn: "9788535928983",
  blocked: true,
  curator: "Mario Vargas Llosa",
  cover: {
    __type: "File",
    name: "118cb7501ce166b0d685ae2d5a2c6e06_O_Leopardo.jpg",
    url: "https://static2.taglivros.com/118cb7501ce166b0d685ae2d5a2c6e06_O_Leopardo.jpg",
  },
  edition: "Maio de 2017",
  numRatings: 437,
  totalRatings: 1710,
};

describe("<BookListItem />", () => {
  it("render basic details", () => {
    render(<BookListItem book={BOOK} />);

    expect(screen.getByText(BOOK.name)).toBeInTheDocument();
    expect(screen.getByText(BOOK.edition)).toBeInTheDocument();
  });

  it("creates a link to a detail page", () => {
    render(<BookListItem book={BOOK} />);

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `/livro/${BOOK.isbn}`
    );
  });
});
