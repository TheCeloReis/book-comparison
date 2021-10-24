import * as functions from "firebase-functions";
import express from "express";
import books from "./mocks/books.json";

const app = express();

app.get("/api/books", (req, res) => {
  res.status(200).send(books);
});

export const api = functions.https.onRequest(app);
