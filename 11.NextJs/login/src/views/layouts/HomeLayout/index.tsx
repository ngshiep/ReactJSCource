import Link from "next/link";
import React, { ReactNode } from "react";
import { routers } from "~/config/routers";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="fixed h-[58px] top-0 left-0 w-full flex items-center justify-center z-50 px-5 bg-white shadow-sm">
        <div className="w-full h-full gap-0 sm:gap-4 flex items-center justify-between py-2">
          <Link href="/" className="min-w-[300px]">
            <span>Logo</span>
          </Link>

          <div className="flex-1 h-full py-2 px-2 bg-gray-200 rounded-full flex justify-between items-center gap-3">
            <span className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
            <input
              type="text"
              className="flex-1 border-none outline-none bg-inherit"
            ></input>
          </div>
          <nav>
            <ul className="capitalize flex gap-5 font-medium flex-1">
              <Link
                href={routers.web.home}
                className="hover:bg-gray-100 px-4 py-2 rounded-xl"
              >
                home
              </Link>
              <Link
                href={routers.web.about}
                className="hover:bg-gray-100 px-4 py-2 rounded-xl"
              >
                About us
              </Link>
              <Link
                href={routers.web.blog}
                className="hover:bg-gray-100 px-4 py-2 rounded-xl"
              >
                blog
              </Link>
              <Link
                href={routers.web.authentication.logout}
                className="hover:bg-gray-100 px-4 py-2 rounded-xl"
              >
                logout
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex items-center justify-center max-w-[1200px] mt-[58px] mx-auto h-[calc(100vh-58px)]">
        {children}
      </div>
    </div>
  );
}
