import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { ReactElement } from "react";
import Layout from "~/views/layouts/HomeLayout";

export default function Covid({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(data);
  return <div>Covid</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    "https://api.covid19api/total/country/vietnam"
  );
  const data = await res.data();
  return { props: { data } };
};

Covid.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
