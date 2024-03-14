import React from "react";
import Laptop from "../assets/laptop.jpg";

const Anayltics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#ffe600] font-bold md:text-5xl sm:text-4xl text-3xl">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centerally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            assumenda modi excepturi optio nesciunt quos alias, ea itaque quod
            recusandae repellat sit est, iusto fugiat fuga exercitationem rem
            tempore soluta!
          </p>
          <button className="bg-[black] text-[yellow] py-3 rounded-md w-[200px] font-medium mx-auto my-6 hover:shadow-3xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Anayltics;
