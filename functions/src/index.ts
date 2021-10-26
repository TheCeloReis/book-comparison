import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import goodReadsAPI from "./goodReadsAPI";
import dotenv from "dotenv";

dotenv.config();

import booksResponse from "./mocks/books.json";

const app = express();
app.use(cors({ origin: true }));

app.get("/api/books", async (req, res) => {
  const isbnArray = booksResponse.results.map((book) => book.isbn);

  try {
    const reviews = await goodReadsAPI.get("/book/review_counts.json", {
      params: { isbns: isbnArray.join(",") },
    });

    const booksWithGoodReads = booksResponse.results.map((book) => {
      const review = reviews.data.books.find(
        (review: any) =>
          review.isbn === book.isbn || review.isbn13 === book.isbn
      );

      if (review) {
        delete review.isbn;
        delete review.isbn13;
      }

      return { ...book, goodReads: review ?? null };
    });

    res.status(200).send({ results: booksWithGoodReads });
  } catch (error) {
    res.status(200).send(booksResponse);
  }
});

app.get("/api/book/:isbn", async (req, res) => {
  const book = booksResponse.results.find(
    (book) => book.isbn === req.params.isbn
  );
  if (!book) {
    res.status(404).send("Book not found");
  }

  try {
    const goodReadsReviews = await goodReadsAPI.get(
      "/book/review_counts.json",
      { params: { isbns: req.params.isbn } }
    );

    if (goodReadsReviews.status !== 200) {
      throw new Error("Error getting reviews");
    }

    res.status(200).send({
      result: { ...book, goodReads: goodReadsReviews.data.books[0] ?? null },
    });
  } catch {
    res.status(200).send({ result: book });
  }
});

export const api = functions.https.onRequest(app);
