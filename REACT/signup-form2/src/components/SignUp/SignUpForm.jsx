/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import { FormContext } from "../../context/FormContext";

const SignUpForm = () => {
  const { formState, setFormState, saveData } = useContext(FormContext);

  const nameRef = useRef();
  // const emailRef = useRef();
  // const passwordRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.password !== formState.confirmPassword) {
      alert("Passwords do not match!");
      return;
    saveData(formState);
    setFormState({ name: "", email: "", password: "", confirmPassword: "" });
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter your Name"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="cnf_password"
          value={formState.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
