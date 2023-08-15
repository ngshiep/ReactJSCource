import React, { ReactElement } from "react";
import Layout from "~/views/layouts/HomeLayout";

export default function About() {
  return <div>About</div>;
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
