export interface Cover {
  __type: string;
  name: string;
  url: string;
}

export interface Book {
  objectId: string;
  pages: number;
  createdAt: Date;
  updatedAt: Date;
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
}

export default interface BooksResponse {
  results: Book[];
}
