/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Show.css";

const Show = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");

  const display = (e) => {
    e.preventDefault();
    if (name && email && password) {
      setSubmittedName(name);
      setSubmittedEmail(email);
      setSubmittedPassword(password);
      alert("Your form has been submitted successfully!");
    } else {
      alert("Please fill the details");
    }
  };

  console.log(submittedName);
  console.log(submittedEmail);
  console.log(submittedPassword);

  return (
    <div>
      <form className="form_container" onSubmit={display}>
        <h2 className="heading">Kindly complete the form below</h2>
        <input
          className="input"
          type="text"
          value={name}
          placeholder="Enter your Username"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="input">
          Submit
        </button>
      </form>
      <div className="display_container">
        <h2 className="heading_2">Submitted Information</h2>
        <p>Name: {submittedName}</p>
        <p>Email: {submittedEmail}</p>
        <p>Password: {submittedPassword}</p>
      </div>
    </div>
  );
};

export default Show;
