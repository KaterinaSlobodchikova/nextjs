import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { BooksSelectors, setSelectedBook } from "../../Redux/reducers/books";

import styles from "./BookPage.module.css";

const BookPage = () => {
  const book = useSelector(BooksSelectors.getSelectedBook);
  const router = useRouter();
  const dispatch = useDispatch();
  const { bookId } = router.query;

  useEffect(() => {
    dispatch(setSelectedBook(bookId));
  }, []);

  return (
    <div>
      <p>Book: {bookId}</p>
      <Image
        src={book?.formats["image/jpeg"]}
        width={200}
        height={250}
        alt="book-img"
      ></Image>
    </div>
  );
};
export default BookPage;
