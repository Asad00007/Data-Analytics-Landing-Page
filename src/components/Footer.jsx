import React from "react";
import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="">
        <h1 className="font-bold text-3xl uppercase text-[yellow]">Data.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          dolor molestias earum veniam blanditiis, explicabo voluptatem odio vel
          labore iusto ipsa fugit dolores dolorem deserunt quas unde ut, impedit
          perspiciatis!
        </p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaDribbbleSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 md:ml-8">
        <div>
          <h6 className="font-medium text-[white]">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[white]">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[white]">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blogs</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
