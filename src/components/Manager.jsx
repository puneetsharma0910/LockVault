import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className=" apna  max-w-4xl">
        <h1 className="text-4xl text  font-bold text-center">
          <span className="text-green-500">&lt;</span>
          Lock
          <span className="text-green-500">Vault/&gt;</span>
        </h1>
        <p className="text-green-500 text-center text-lg">
          Your own Password manager
        </p>
        <div className="text-black px-4 flex flex-col    gap-4 ">
          <input placeholder="Enter Website Url"
            className="rounded-full px-4  py-1 border border-green-500"
            type="text"
          />
          <div className="flex w-full gap-8">
            <input 
               placeholder="Enter Username"
              className="rounded-full w-full p-3  py-1
           border border-green-500"
              type="text"
            />
           <div className="relative">
           <input
               placeholder="Enter Password"
              className="rounded-full p-3 py-1 w-full border border-green-500"
              type="text"
            />
            <span className="absolute">
                 <img src="public\icons\eye.svg" alt="" />
            </span>

           </div>
          </div>
          <button className="flex justify-center mx-auto rounded-full bg-green-500 items-center w-fit px-3 gap-1 py-1 hover:bg-green-400 border-1 border-green-950">
  <lord-icon
    src="https://cdn.lordicon.com/jgnvfzqg.json"
    trigger="hover"
  ></lord-icon>
  Add Password
</button>
        </div>
      </div>
    </>
  );
};

export default Manager;