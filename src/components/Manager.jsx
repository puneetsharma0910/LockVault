import React, { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({
    site: "",
    username: "",
    password: "",
  });
  const [passwordarray, setpasswordarray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordarray(JSON.parse(passwords));
    }
  }, []);

  const showpassword = () => {
    alert("You are accessing the password.");
    if (ref.current.src.includes("icons/eyecross.jpg")) {
      ref.current.src = "icons/eye.jpg";
    } else {
      ref.current.src = "icons/eyecross.jpg";
    }
  };

  const savepassword = () => {
    const newPasswords = [...passwordarray, form]; // Corrected issue
    setpasswordarray(newPasswords);
    localStorage.setItem("passwords", JSON.stringify(newPasswords));

    // Reset form after saving
    setform({ site: "", username: "", password: "" });
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="apna max-w-4xl">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          Lock
          <span className="text-green-500">Vault/&gt;</span>
        </h1>
        <p className="text-green-500 text-center text-lg">
          Your own Password Manager
        </p>
        <div className="text-black px-4 flex flex-col gap-4">
          <input
            placeholder="Enter Website URL"
            className="rounded-full px-4 py-1 border border-green-500"
            type="text"
            value={form.site}
            onChange={handlechange}
            name="site"
          />
          <div className="flex w-full gap-8">
            <input
              placeholder="Enter Username"
              className="rounded-full w-full p-3 py-1 border border-green-500"
              type="text"
              value={form.username}
              onChange={handlechange}
              name="username"
            />
            <div className="relative">
              <input
                placeholder="Enter Password"
                className="rounded-full p-3 pr-10 pl-4 py-1 w-full border border-green-500"
                type="text"
                value={form.password}
                onChange={handlechange}
                name="password"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src="icons/eye.jpg"
                  alt="Show password"
                  className="w-5 h-5 cursor-pointer"
                  ref={ref}
                  onClick={showpassword}
                />
              </span>
            </div>
          </div>
          <button
            className="flex justify-center mx-auto rounded-full bg-green-500 items-center w-fit px-3 gap-1 py-1 hover:bg-green-400 border-1 border-green-950"
            onClick={savepassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>

        {/* Table to show saved passwords */}
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordarray.length === 0 && <div>No passwords to show</div>}
          {passwordarray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="text-white bg-green-600">
                <tr>
                  <th className="w-32 text-center">Site</th>
                  <th className="w-32 text-center">Username</th>
                  <th className="w-32 text-center">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordarray.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 w-32 text-center"  ><a href={item.site} target = '_blank'>{item.site}</a></td>
                    <td className="py-2 w-32 text-center">{item.username}</td>
                    <td className="py-2 w-32 text-center">{item.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
