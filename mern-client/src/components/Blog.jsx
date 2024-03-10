import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Welcome to Our Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="data:image/jpeg;base64,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"
            alt="Blog Post 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">
              The Importance of Reading Books
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Discover why reading books is crucial for personal and
              intellectual growth, and how it can positively impact your life.
            </p>
            <a
              href="https://www.uopeople.edu/blog/why-its-important-to-read"
              className="block mt-4 text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://www.uopeople.edu/wp-content/uploads/bb-plugin/cache/Why-Read-copy-landscape-a8ec085baa62486fb2cf3f7e847dee89-n5mwvo4a7kez.jpg"
            alt="Blog Post 2"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">
              Top 10 Must-Read Books of All Time
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Explore our curated list of the top 10 must-read books that
              everyone should have on their bookshelf.
            </p>
            <a
              href="https://www.harpersbazaar.com/uk/culture/staying-in/news/g21806/10-books-you-should-have-read-before-18/"
              className="block mt-4 text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/18/2018/09/how-to-start-a-book-club-850x560.jpg"
            alt="Blog Post 3"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">
              How to Start Your Own Book Club
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Learn valuable tips and tricks for starting your own book club,
              fostering a love for reading, and building a community.
            </p>
            <a
              href="https://www.epl.ca/blogs/post/how-to-start-a-book-club/"
              className="block mt-4 text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
        {/* Add more blog posts as needed */}
      </div>
    </div>
  );
};

export default Blog;
