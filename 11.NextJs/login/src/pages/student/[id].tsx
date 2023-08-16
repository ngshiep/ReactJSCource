import { useRouter } from "next/router";
import React from "react";
import { ReactElement } from "react";
import Layout from "~/views/layouts/HomeLayout";

export default function StudentDetail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h2 className="text-lg font-bold mb-5">Student Information</h2>
      <p className="text-center text-base">Student: {id}</p>
    </div>
  );
}
StudentDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
