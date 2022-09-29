import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BookListType,
  BookModel,
} from "../../../Utils/Types/models/book.model";
import { AppState } from "../../store";

type InitialStateType = {
  booksList: any[];
  selectedBook: BookModel | null;
  isBooksLoading: boolean;
  selectedBookLoading: boolean;
};

const initialState: InitialStateType = {
  booksList: [],
  selectedBook: null,
  isBooksLoading: false,
  selectedBookLoading: false,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks: (state, action: PayloadAction<undefined>) => {},
    setLoadingBooks: (state, action: PayloadAction<boolean>) => {
      state.isBooksLoading = action.payload;
    },
    setBooks: (state, action: PayloadAction<any>) => {
      state.booksList = action.payload.results;
    },
    setSelectedBook: (state: any, action: any) => {
      state.selectedBook = action.payload;
    },
    setSelectedBookLoading: (state: any, action: any) => {
      state.isSelectedBookLoading = action.payload;
    },
  },
});

export const {
  getBooks,
  setLoadingBooks,
  setBooks,
  setSelectedBook,
  setSelectedBookLoading,
} = booksSlice.actions;

const reducer = booksSlice.reducer;

export default reducer;

export const BooksSelectors = {
  getBooks: (state: AppState) => state.books.booksList,
  getBooksLoading: (state: AppState) => state.books.isBooksLoading,
  getAllBooks: (state: AppState) => state.books.booksList,
  getSelectedBook: (state: AppState) => state.books.selectedBook,
  getSelectedBookLoading: (state: AppState) => state.books.selectedBookLoading,
};
