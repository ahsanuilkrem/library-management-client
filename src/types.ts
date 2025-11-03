
import { z } from "zod";

export const genreEnum = z.enum([
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
]);

// Validation Schema
export const bookFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  isbn: z.string().min(1, "ISBN is required"),
  genre:genreEnum,
  description: z.string().optional(),
  copies: z.string().min(1, "At least 1 copy required"),
  available: z.boolean().optional(),
});

export type Genre = 
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
 

}


export interface IMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
  meta?: IMeta;
}
 


export interface Book {
  title: string;
  isbn: string;
}

export interface IBorrow {
  book: Book;
  totalQuantity: number;
  dueDates: string[];
}
