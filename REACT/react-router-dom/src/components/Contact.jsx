/* eslint-disable no-unused-vars */
import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="section-1 flex justify-center">
        <div className="text p-6 bg-slate-200 rounded-lg">
          <h1 className="text-4xl font-[900] ml-3">Get in touch:</h1>
          <h1 className="text-2xl text-stone-600 ml-3 ">
            Fill in the form to start a conversation
          </h1>
          <div className="details mt-5 p-4">
            <div className="icon-1 mb-3">
              <img src="" alt="" />
              <div className="text text-gray-700 ">
                Acme Inc, Street, <br />
                State, Postal Code
              </div>
            </div>
            <div className="icon-2 mb-3">
              <img src="" alt="" />
              <div className="text  text-gray-700">+44 1234567890</div>
            </div>
            <div className="icon-3 mb-3">
              <img src="" alt="" />
              <div className="text text-gray-700">info@acme.org</div>
            </div>
          </div>
        </div>
        <div className="form grid w-max p-4">
          <input
            className="border-2 border-slate-500 rounded-md p-1 m-4 h-12 w-80"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="border-2 border-slate-500 rounded-md p-1 m-4 h-12"
            type="email"
            placeholder="Email"
          />
          <input
            className="border-2 border-slate-500 rounded-md p-1 m-4 h-12"
            type="number"
            placeholder="Telephone Number"
          />
          <button className="bg-orange-600 w-28 h-12 rounded-lg text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
