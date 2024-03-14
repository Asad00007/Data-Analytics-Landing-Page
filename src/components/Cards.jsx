import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt=""
          />
          <h2 className="font-bold text-center py-8 text-2xl">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500Gb Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send upto 2gb</p>
          </div>
          <button className="bg-[yellow] py-3 mx-auto w-[200px] mt-6 rounded-md font-medium my-6">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col bg-gray-100 p-4 rounded-lg md:my-0 my-8 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt=""
          />
          <h2 className="font-bold text-center py-8 text-2xl">Partnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1Tb Storage</p>
            <p className="py-2 border-b mx-8 ">3 Users Allowed</p>
            <p className="py-2 border-b mx-8 ">Send upto 10gb</p>
          </div>
          <button className="bg-[black] text-[yellow] py-3 mx-auto w-[200px] mt-6 rounded-md font-medium my-6">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt=""
          />
          <h2 className="font-bold text-center py-8 text-2xl">Group Account</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5Tb Storage</p>
            <p className="py-2 border-b mx-8 ">10 Users Allowed</p>
            <p className="py-2 border-b mx-8 ">Send upto 20gb</p>
          </div>
          <button className="bg-[yellow] py-3 mx-auto w-[200px] mt-6 rounded-md font-medium my-6">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
