import { routers } from "../../../config/routers";
import axios from "axios";

export const postApiServices = {
  getAllPosts: async () => {
    const url = routers.api.base_url + routers.api.posts;
    const response = await axios.get(url);
    return response.data;
  },
};
