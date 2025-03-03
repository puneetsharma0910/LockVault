import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800  text-white">
      <div className="flex justify-around items-center apna px-4 py-5 h-14 mycontainer">
        <div className="logo font-bold text-2xl">
            <span className="text-green-700">&lt;</span>
            Lock
            <span className="text-green-700">Vault/&gt;</span>
            
            
            </div>
        {/* <ul>
          <li className="flex gap-4 transition-all">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              Contact Us
            </a>
            <a className="hover:font-bold" href="*">
              About
            </a>
          </li>
        </ul> */}
        <button className="flex bg-green-700 rounded-full justify-between items-center ">
          <img className="w-10 p-1 rounded-full"  src="/icons/git.png" alt="" />
          <span className="p-1 font-bold pr-1
          ">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
