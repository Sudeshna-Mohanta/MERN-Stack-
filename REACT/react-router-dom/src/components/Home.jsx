/* eslint-disable no-unused-vars */
import React from "react";

const Home = () => {
  return (
    <div className="home_page">
      <div className="section-1 flex p-32 justify-between">
        <div className="image-1 ">
          <img
            className="h-60 w-100"
            src="https://gofloaters.com/work-from-anywhere-toolkit/assets/images/remote2.png"
            alt="Image"
          />
        </div>
        <div className="text">
          <h1 className="font-[700] text-5xl">Download Now</h1>
          <h2 className="font-[700] text-4xl text-end">Lorem Ipsum</h2>

          <button className="bg-orange-600 w-48 p-1 mt-10 flex rounded-lg justify-center text-white">
            <div>
              <img
                className="h-10"
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTH5N77cJ9cUQy51EaLPzI47TKmPKUWYLF49VxXYuRYOVdK4j2v"
                alt="Image"
              />
            </div>
            <div className="">Download now</div>
          </button>
        </div>
      </div>

      <div className="section-2">
        <div className="image-2 grid place-items-center p-16">
          <img
            className="h-60 w-100"
            src="https://i.ibb.co/2M7rtLk/Remote1.png"
            alt="Image"
          />
        </div>
        <div className="text-2 text-center">
          <h1 className="text-5xl font-[500]">Lorem Ipsum Yojo</h1>
        </div>
      </div>

      <div className="section-3 mt-10 flex justify-around">
        <div className="logo">
          <img
            className="h-16"
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="Image"
          />
        </div>
        <div className="grid grid-cols-2 ">
          <div className="column-1 ">
            <h1>RESOURCES</h1>
            <h1>
              <a href="">Home</a>
            </h1>
            <h1>
              <a href="">Contact</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
