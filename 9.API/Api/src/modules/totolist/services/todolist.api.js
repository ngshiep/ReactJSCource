import axios from "axios";

export const todoApiServices = {
  getAllTodo: async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await axios.get(url);
    return response.data;
  },

  addTodo: async (todo) => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await axios.post(url, todo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
};
