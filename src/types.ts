export interface ITask {
      title:  string,
      author: string,
      Genre: string,
      ISBN: string,
      Copies: number,
      Availability: string,
      Actions: ["View", "Edit", "Delete"],
}

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
  createdAt: Date;
  updatedAt: Date;

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
