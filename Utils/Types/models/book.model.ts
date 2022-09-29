export type BookModel = {
  id: number;
  title: string;
  subjects: string[];
  authors: any;
  translators: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: any;
  download_count: number;
};

export type BookListType = Array<BookModel>;
