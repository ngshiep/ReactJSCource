import React from "react";
import { ReactElement } from "react";
import Layout from "~/views/layouts/HomeLayout";
import { getStudents } from "../mock-data/_data";
import Link from "next/link";

export default function Student() {
  return (
    <div className="relative overflow-x-auto min-w-[1000px] max-h-[560px]">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {getStudents().map((student) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={student.id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {student.id}
              </th>
              <td className="px-6 py-4">{student.name}</td>
              <td className="px-6 py-4 text-center">
                <Link
                  href={`/student/${encodeURIComponent(student.id)}`}
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white"
                >
                  Show
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Student.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
