import React, { useState } from "react";
import { Navigate, useLoaderData, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

const EditBooks = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  //WE are destructuring the data after it is loaded inside the roouter.jsx file, there we have already
  //loaded the data from the backend to the laoder, so now we only have to destructure it
  const {
    bookTitle,
    authorName,
    bookPDFURL,
    category,
    bookDescription,
    imageURL,
  } = useLoaderData();
  console.log(useLoaderData());
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "History",
    "Biography",
    "Horror",
    "Mystery",
    "Romance",
    "Thriller",
    "Programming",
    "Fantasy",
    "Travel",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (e) => {
    console.log(e.target.value);
    setSelectedBookCategory(e.target.value);
  };

  // handle book submission
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const bookDescription = form.bookDescription.value;
    const category = form.categoryName.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    // console.log(bookObj);
    // now sending data to database

    //update book
    fetch(`https://bookstore-tn2h.onrender.com/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Updated successfully!");
        console.log(data);
        navigate("/admin/dashboard/manage"); // Navigate to the desired location
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the Book data</h2>

      <form
        onSubmit={handleUpdate}
        className="flex md:w-[400px] lg:w-[1000px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Title"
              required
              defaultValue={bookTitle}
            />
          </div>

          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>

        {/* second row  */}
        <div className="flex gap-8">
          {/* image url */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
              defaultValue={imageURL}
            />
          </div>

          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* third row */}
        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Add your book Description..."
            required
            className="w-full"
            rows={4}
            defaultValue={bookDescription}
          />
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            type="text"
            placeholder="Book PDF URL"
            required
            shadow
            defaultValue={bookPDFURL}
          />
        </div>

        <Button type="submit" className="mt-3">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
