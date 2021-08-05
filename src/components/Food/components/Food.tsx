import React from "react";

interface FoodProps {}

export function Food({}: FoodProps) {
  return (
    <div className="min-h-screen flex items-center justify-start">
      <div className="flex w-full max-w-xs p-4 bg-white">
        <ul className="flex flex-col w-full">
          <li className="my-px">
            <span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">
              by continent
            </span>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span className="ml-3">Asian</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span className="ml-3">South American</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span className="ml-3">Clients</span>
              <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
                1k
              </span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span className="flex items-center justify-center text-lg text-green-400">
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
              <span className="ml-3">Ask to add new</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
