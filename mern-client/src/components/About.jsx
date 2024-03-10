import React from "react";
import { Avatar, Blockquote } from "flowbite-react";
import userImg from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-3xl font-semibold text-center mb-8">
        About Bookstore
      </h1>
      <section className="max-w-screen-md mx-auto">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Bookstore is a modern web application built using the MERN stack,
          where users can browse, sell, and manage books. It provides
          seamless login and sign-up experience using Firebase authentication
          with Google OAuth. MongoDB is used for backend data storage.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Users can view all available books and if they wish to sell a book,
          they need to login or sign up. After authentication, users can upload
          books with details, edit, read, and delete them. Additionally, there
          is a feedback page where users can provide feedback before logging
          out.
        </p>
        <figure className="mx-auto text-center mb-8">
          <svg
            className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <Blockquote>
            <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center justify-center space-x-3">
            <Avatar rounded size="xs" img={userImg} alt="profile picture" />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                P AMAL MANOJ
              </cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                Full stack Developer
              </cite>
            </div>
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default About;
