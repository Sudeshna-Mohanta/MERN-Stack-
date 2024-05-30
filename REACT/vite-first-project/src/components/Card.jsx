import React from "react";
import "../components/Card.css";

const Card = ({ user }) => {
  const { name, age, role, city } = user;
  return (
    <div>
      <div className="card_container">
        <div className="image_container">
          <img
            src="https://avatars.githubusercontent.com/u/116780946?s=400&u=6736f6f4a011b48a176ce6c83ee7a0791e541973&v=4"
            alt="profile_pic"
          />
        </div>
        <div className="text_container">
          <p>Name : {name}</p>
          <p>Age : {age} </p>
          <p>Role : {role}</p>
          <p>City : {city}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
