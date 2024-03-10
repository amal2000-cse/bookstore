import React, { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import userImg from "../assets/profile.jpg";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { email, photoURL, metadata } = user;
  const { displayName } = user || {};
  const { creationTime, lastSignInTime } = metadata;

  return (
    <div className="px-4 my-12 w-full">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full space-y-4">
        {displayName && (
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome, {displayName}
          </h2>
        )}
        {" "}

        <div className="flex flex-col space-y-2">
          <p className="text-gray-600">Email: {email}</p>
          <div className="flex items-center space-x-2">
            <p className="text-gray-600">Photo:</p>
            {photoURL ? (
              <img src={photoURL} alt="User" className="w-8 h-8 rounded-full" />
            ) : (
              <img src={userImg} alt="User" className="w-8 h-8 rounded-full" />
            )}
          </div>
          <p className="text-gray-600">
            Account Created: {new Date(creationTime).toLocaleString()}
          </p>
          <p className="text-gray-600">
            Last Time Logged In: {new Date(lastSignInTime).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
