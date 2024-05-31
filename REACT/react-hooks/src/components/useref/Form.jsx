/* eslint-disable no-unused-vars */
import React from "react";

const Form = () => {

   const handlesubmit 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Add username" />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Add your email" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Add password" />
        <button type ="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
