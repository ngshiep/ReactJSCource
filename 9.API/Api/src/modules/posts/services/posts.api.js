import { routers } from "../../../routers/routers";
import axios from "axios";

export const postApiServices = {
  getAllPosts: async () => {
    const url = routers.api.base_url + routers.api.posts;
    const response = await axios.get(url);
    return response.data;
  },

  addPost: async (post) => {
    const url = routers.api.base_url + routers.api.posts;
    const response = await axios.post(url, post, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },

  modifyPost: async (id, post) => {
    const url = routers.api.base_url + routers.api.posts + `/${id}`;
    const response = await axios.patch(url, post);
    return response;
  },

  deletePost: async (id) => {
    const url = routers.api.base_url + routers.api.posts + `/${id}`;
    const response = await axios.delete(url);
    return response;
  },
  getAllUsers: async () => {
    const url = routers.api.base_url + routers.api.users;
    const response = await axios.get(url);
    return response.data;
  },
};
