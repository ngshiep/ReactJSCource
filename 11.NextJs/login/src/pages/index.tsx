import Image from "next/image";
import { Inter } from "next/font/google";
import type { ReactElement } from "react";
import Layout from "~/views/layouts/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <h1>Home page</h1>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
