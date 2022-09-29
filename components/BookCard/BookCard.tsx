import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookModel } from "../../Utils/Types/models/book.model";
import styles from "./BookCard.module.css";

type BookCardProps = {
  book: BookModel;
};

const BookCard: FC<BookCardProps> = (props) => {
  const { book } = props;

  const bookImage = book.formats["image/jpeg"];

  return (
    <div className={styles.bookCardContainer}>
      <div className={styles.imageWrapper}>
        <Image src={bookImage} width={200} height={250} alt="book-img"></Image>
      </div>

      <div className={styles.titleWrapper}>
        <Link href={`/bookPage/${book.id}`}>{book.title}</Link>
      </div>

      <div className={styles.authorWrapper}>
        <div>
          {book.authors.map((author: any, index: any) => {
            return <div key={index}>{author.name}</div>;
          })}
        </div>
      </div>
      <div>Downloads {book.download_count}</div>
    </div>
  );
};

export default BookCard;
