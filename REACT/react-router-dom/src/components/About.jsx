/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <div className="about ">
      <div className="section-1 flex flex-col md:flex-row items-center md:items-start p-14">
        <div className="image-1 ">
          <img
            className="h-full w-full object-cover"
            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
            alt="Image"
          />
        </div>      
        <div className="text">
          <h2 className="font-[700] text-4xl">
            React development is carried out by passionate developers
          </h2>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
            voluptatem accusantium nemo perspiciatis delectus atque autem!
            Voluptatum tenetur beatae unde aperiam, repellat expedita
            consequatur! Officiis id consequatur atque doloremque! Nobis minus
            voluptatibus pariatur dignissimos libero quaerat iure expedita at?
            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
            mollitia.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
