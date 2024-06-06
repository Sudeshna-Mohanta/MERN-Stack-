/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";

const SignupForm = () => {
  const { saveData } = useContext(DataContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nameRef = useRef();

  const handleChange = (e) => {
    // console.log(formData);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // It will not refresh the page .
    saveData(formData);
    setFormData({ name: "", email: "", password: "" });
    // nameRef.current.focus();
    console.log(nameRef.current.value);
  };

  return (
    <div className="signup-form">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
