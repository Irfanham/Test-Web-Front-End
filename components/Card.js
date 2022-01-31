import React from "react";
import { posts } from "../data/data";
import post from "../pages/data.json";

export const getStaticProps = async () => {
  return {
    props: { posts: posts },
  };
};

export default function Blog() {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          >
            <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src={post.cover}
                />
              </a>

              <div className="flex items-center justify-between leading-tight p-1 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:text-gray-500 " href="#">
                    {post.product_name}
                  </a>
                </h1>
              </div>
              <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <p className="mb-3 font-sans text-gray-500 dark:text-gray-400">
                  {post.description}
                </p>
              </div>

              <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-blue-500"
                  href="#"
                >
                  {index % 2 == 0 ? null : (
                    <p className="ml-2 text-sm text-blue-500">Sponsored Ad</p>
                  )}
                </a>
                <div className="flex flex-row justify-between">
                  <div className="no-underline  ">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  {index % 2 == 0 ? (
                    <div className="no-underline ">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="no-underline ">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="black"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="no-underline text-grey-darker hover:text-red-dark">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
