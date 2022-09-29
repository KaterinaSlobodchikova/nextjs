import { create } from "apisauce";

const API = create({ baseURL: "https://gutendex.com/" });

const getAllBooksApi = () => {
  return API.get("/books/");
};

const getSelectedBookApi = (id: number) => {
  return API.get(`/books/${id}`);
};

export { getAllBooksApi, getSelectedBookApi };
