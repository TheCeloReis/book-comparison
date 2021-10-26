export interface Cover {
  __type: string;
  name: string;
  url: string;
}

export interface Book {
  objectId: string;
  pages: number;
  createdAt: string;
  updatedAt: string;
  author: string;
  name: string;
  isbn: string;
  curator: string;
  cover: Cover;
  edition: string;
  blocked: boolean;
  numRatings: number;
  totalRatings: number;
  active?: boolean;
  goodReads?: GoodReadsReviews | null;
}

export interface GoodReadsReviews {
  id: number;
  isbn: string | null;
  isbn13: string | null;
  ratings_count: number;
  reviews_count: number;
  text_reviews_count: number;
  work_ratings_count: number;
  work_reviews_count: number;
  work_text_reviews_count: number;
  average_rating: string;
}

export interface BooksResponse {
  results: Book[];
}

export interface BookResponse {
  result: Book;
}
