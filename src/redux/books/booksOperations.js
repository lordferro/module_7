import { createAsyncThunk } from '@reduxjs/toolkit';
import * as bookShelfAPI from 'services/bookshelf-api';

export const fetchBooks = createAsyncThunk(
  // этв строка автоматом создаст свойства :
  // pending: 'books/fetchBooks/pending'
// fulfilled: 'books/fetchBooks/fulfilled'
// rejected: 'books/fetchBooks/rejected'
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookShelfAPI.fetchBooks();
      // то что вернули от сюда - будет payload при success
      return books;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// export const fetchBooks = () => async dispatch => {
//   dispatch(booksActions.fetchBooksRequest());

//   try {
//     const books = await bookShelfAPI.fetchBooks();
//     dispatch(booksActions.fetchBooksSuccess(books));
//   } catch (error) {
//     dispatch(booksActions.fetchBooksError(error));
//   }
// };
