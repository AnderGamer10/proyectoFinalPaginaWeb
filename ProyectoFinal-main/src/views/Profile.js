//React
import React from "react";
import { useParams } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";

//styles

const Profile = () => {
  /*Logica*/
  const { username } = useParams();
  return (
    <div>
      <h1>ProfilePage: {username}</h1>
    </div>
  );
};

export default Profile;
