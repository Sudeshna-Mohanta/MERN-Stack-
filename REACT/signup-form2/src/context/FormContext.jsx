/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  // const [data, setData] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const saveData = (userdata) => {
    setFormState((prev) => {
      const newData = [...prev, userdata];
      localStorage.setItem("userdata", JSON.stringify(newData));
    });
  };
  return (
    <FormContext.Provider value={{ formState, setFormState, saveData }}>
      {children}
    </FormContext.Provider>
  );
};
