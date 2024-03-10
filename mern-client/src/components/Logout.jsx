import React, { useContext, useState } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";

const Logout = () => {
  // const {logOut}=useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    feedback: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Feedback submitted successfully!");
        setFormData({
          displayName: user?.displayName || "",
          email: user?.email || "",
          feedback: "",
        });
      } else {
        throw new Error("Failed to submit feedback");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit feedback");
    }
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("i am inside logout");
        alert("Sign-out successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center h-20 mb-[-50px] gap-5 bg-green-50">
        <span className="my-4">
          Before logging out, give us feedback to improve our website.
        </span>
        <Button onClick={handleLogout} className="my-2">
          Logout
        </Button>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-md w-full p-4 bg-white rounded-lg shadow-lg"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              name="displayName"
              type="text"
              value={formData.displayName}
              onChange={handleChange}
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your Email" />
            </div>
            <TextInput
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@flowbite.com"
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="feedback" value="Your Feedback" />
            </div>
            <Textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              shadow
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link
                href="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button type="submit">Submit Feedback</Button>
        </form>
      </div>
    </div>
  );
};

export default Logout;
