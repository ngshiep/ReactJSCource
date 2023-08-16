import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import axios from "axios";
import { ReactElement } from "react";
import Layout from "~/views/layouts/HomeLayout";

export default function Weather({
  data: weatherData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(weatherData);

  return (
    <>
      <div className="flex items-start justify-center px-10 py-5 flex-col">
        <h1 className="mx-auto text-3xl font-medium text-gray-500">
          Right now in Viet Nam, it's{" "}
          <span className="lowercase">
            {weatherData.weather[0]?.main || "Rain"}
          </span>
        </h1>
        {/* weather container */}
        <div className="flex items-center justify-center w-full gap-4">
          {/* weather icon */}
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[150px] h-[150px] text-yellow-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
              />
            </svg>
          </span>
          <div className="flex items-center justify-center flex-col h-full mx-3 relative">
            <h1 className="text-gray-700 text-[100px] leading-none" id="temp">
              {weatherData.main.temp.toFixed(0)}
            </h1>
            <span
              className="text-gray-400 text-xl absolute -top-2 -right-2"
              id="temp_minmax"
            >
              ℃
            </span>
          </div>
          <div className="flex gap-1 flex-row h-[150px]">
            {/* icons */}
            <div className="flex items-center gap-4 flex-col h-full justify-center">
              <div className="flex gap-2">
                <span className="text-gray-400 text-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-sun-wind"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14.468 10a4 4 0 1 0 -5.466 5.46" />
                    <path d="M2 12h1" />
                    <path d="M11 3v1" />
                    <path d="M11 20v1" />
                    <path d="M4.6 5.6l.7 .7" />
                    <path d="M17.4 5.6l-.7 .7" />
                    <path d="M5.3 17.7l-.7 .7" />
                    <path d="M15 13h5a2 2 0 1 0 0 -4" />
                    <path d="M12 16h5.714l.253 0a2 2 0 0 1 2.033 2a2 2 0 0 1 -2 2h-.286" />
                  </svg>
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-400 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-droplet"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z" />
                  </svg>
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-400 text-center flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-umbrella"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 12a8 8 0 0 1 16 0z" />
                    <path d="M12 12v6a2 2 0 0 0 4 0" />
                  </svg>
                </span>
              </div>
            </div>
            {/* content */}
            <div className="flex items-center gap-2 justify-center flex-col h-full ">
              <div className="flex gap-2 justify-start">
                <div className="flex w-[100px]">
                  <span
                    className="w-10 text-center text-3xl text-gray-500"
                    id="wind_speed"
                  >
                    {weatherData.wind.speed.toFixed(1)}
                  </span>
                  <p className="text-sm text-gray-400 leading-none flex items-end pb-1">
                    km/h
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-start">
                <div className="flex w-[100px]">
                  <span
                    className="w-10 text-center text-3xl text-gray-500"
                    id="humidity"
                  >
                    {weatherData.main.humidity}
                  </span>
                  <p className="text-sm text-gray-400 leading-none flex items-end pb-1">
                    %
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-start">
                <div className="flex w-[100px]">
                  <span
                    className="w-10 text-center text-3xl text-gray-500"
                    id="clouds_all"
                  >
                    {weatherData.clouds.all}
                  </span>
                  <p className="text-sm text-gray-400 leading-none flex items-end pb-1">
                    %
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const API_KEY = "cdd39d053aa5062aed0376e8df8b4507";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=21.02&lon=105.83&units=metric&appid=${API_KEY}`;
  const res = await axios.get(url);
  const data = await res.data;
  console.log(
    "🚀 ~ file: index.tsx:18 ~ constgetServerSideProps:GetServerSideProps= ~ data:",
    data
  );
  return { props: { data } };
};

Weather.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
