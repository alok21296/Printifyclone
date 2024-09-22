import { useState } from "react"
import logo from "/Users/aloksingh/Desktop/Projects Deployed/printify/src/assets/Printify copy.png"
import React from 'react';

const Header = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  return (
    <>
   <header className="flex justify-between gap-8 items-center text-black w-full h-16 px-8 md:px-8 bg-white drop-shadow-md sticky">
        <a href="#">
          <img src={logo} alt="logo" className="w-52 hover:scale-105 transition-all"/>
        </a>
        <ul className="hidden xl:flex item:center gap-1 font-semibold text-base">
          <li className="p-3  hover:text-green-400 rounded-md transition-all cursor-pointer">Home</li>
          <li className="p-3  hover:text-green-400 rounded-md transition-all cursor-pointer">Catalog</li>
          <li className="p-3  hover:text-green-400 rounded-md transition-all cursor-pointer">How it works?</li>
          <li className="p-3  hover:text-green-400 rounded-md transition-all cursor-pointer">Pricing</li>
          <li className="p-3  hover:text-green-400 rounded-md transition-all cursor-pointer">Blog</li>
          <li className="p-3  hover:text-green-400 rounded-md transition-all cursor-pointer">Services</li>
          <li className="p-3  hover:text-green-400 rounded-md transition-all cursor-pointer">Use-Cases</li>
          <li className="p-3  hover:text-green-400 rounded-md transition-all cursor-pointer">Need Help?</li>
          
        </ul>
        <div className="hidden xl:flex gap-4 font-semibold items-center">
          <button className="bg-white border text-black hover:text-gray-700 hover:bg-blue-300 rounded-md px-2">Login</button>
          <button className="bg-green-500 hover:text-black rounded-md text-white px-2">Sign up</button>
        </div>
        <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer" onClick={()=>setIsMenuOpen(!isMenuOpen)}></i>
        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen?"opacity-100":"opacity-0"}`}
        style={{transition:"transform 0.3s ease,opacity 0.3s ease"}}
        >
            <li className="list-none w-full text-center p-4  hover:text-green-400 transition-all cursor-pointer">Home</li>
            <li className="list-none w-full text-center p-4  hover:text-green-400 transition-all cursor-pointer">Catalog</li>
            <li className="list-none w-full text-center p-4  hover:text-green-400 transition-all cursor-pointer">How it works? </li>
            <li className="list-none w-full text-center p-4  hover:text-green-400 transition-all cursor-pointer">Pricing</li>
            <li className="list-none w-full text-center p-4  hover:text-green-400 transition-all cursor-pointer">Blog</li>
            <li className="list-none w-full text-center p-4  hover:text-green-400 transition-all cursor-pointer">Services</li>
            <li className="list-none w-full text-center p-4  hover:text-green-400 transition-all cursor-pointer">Use-Cases</li>
            <li className="list-none w-full text-center p-4  hover:text-green-400 transition-all cursor-pointer">Need Help?</li>
        </div>
      </header>
   </>
  );
};

export default Header;
