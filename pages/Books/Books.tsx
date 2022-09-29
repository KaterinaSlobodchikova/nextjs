import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import BookCard from "../../components/BookCard";
import { getBooks, BooksSelectors } from "../../Redux/reducers/books";
import { BookModel } from "../../Utils/Types/models/book.model";
import styles from "../Books/Books.module.css";

const Books = () => {
  const [query, setQuery] = useState("");
  const bookList = useSelector(BooksSelectors.getBooks);
  const isAllBooksLoading = useSelector(BooksSelectors.getBooksLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const allBooksElements = useMemo(() => {
    return bookList?.map((book: BookModel) => (
      <BookCard key={book.id} book={book} />
    ));
  }, [bookList]);

  const searchBooksElements = useMemo(() => {
    return bookList
      ?.filter((book) => book.title.toLowerCase().includes(query))
      .map((book: BookModel) => <BookCard key={book.id} book={book} />);
  }, [bookList, query]);

  return (
    <div className={styles.bookContainer}>
      <div className={styles.searchInputContainer}>
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            onChange={(event: any) =>
              setQuery(event.target.value.toLowerCase())
            }
            placeholder="Search by Title"
          />
        </div>
      </div>
      {isAllBooksLoading && <div>Loading...</div>}
      <div className={styles.booksWrapper}>
        {searchBooksElements.length !== 0 ? (
          searchBooksElements
        ) : (
          <div className={styles.booksWrapper}>{allBooksElements}</div>
        )}
      </div>
    </div>
  );
};

export default Books;
