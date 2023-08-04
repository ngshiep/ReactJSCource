import axios from "axios";

const baseUrl =
  "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books";
export const manageBookServices = {
  getAllBooks: async () => {
    const url = baseUrl;
    const response = await axios.get(url);
    return response.data;
  },

  addBooks: async (book) => {
    const response = await axios.post(baseUrl, book, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },

  modifyBooks: async (id, Books) => {
    const url = baseUrl + `/${id}`;
    const response = await axios.patch(url, Books);
    return response;
  },

  deleteBooks: async (id) => {
    const url = baseUrl + `/${id}`;
    const response = await axios.delete(url);
    return response;
  },
};
