import React, { ReactElement } from "react";
import Layout from "~/views/layouts/HomeLayout";

export default function Blog() {
  return <div>Blog</div>;
}
Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
