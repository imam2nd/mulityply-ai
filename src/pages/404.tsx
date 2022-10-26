import React from "react";
import { Link } from "gatsby";
import Layout from "@/components/common/Layout";

const Four0Four = () => {
  return (
    <Layout>
      <div className="min-h-screen grid items-center bg-background text-white">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-center text-8xl">404</h1>
          <p className="text-center text-gray-400 text-xl">
            The page you are looking for does not exist.
          </p>
          <Link to="/">
            <button className="rounded px-4 py-3 mt-4 bg-gray-800 hover:bg-gray-700 transition-colors flex gap-2 mx-auto">
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
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Four0Four;

export const Head = () => {
  return (
    <>
      <title>404 - Not Found | Multiply</title>;
    </>
  );
};
