import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("https://bookstore-tn2h.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setbooks(data.slice(0, 8)));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  );
};

export default OtherBooks;
