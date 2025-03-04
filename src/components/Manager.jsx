import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";

const Manager = () => {
  const ref = useRef();
  const passwordref = useRef();
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
    passwordref.current.type = "text";
    //alert("You are accessing the password.");
    if (ref.current.src.includes("icons/eyecross.jpg")) {
      ref.current.src = "icons/eye.jpg";
      passwordref.current.type = "password";
    } else {
      passwordref.current.type = "text";
      ref.current.src = "icons/eyecross.jpg";
    }
  };
  const savepassword = () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      const newPasswords = [...passwordarray, { ...form, id: uuidv4() }];
      setpasswordarray(newPasswords);
      localStorage.setItem("passwords", JSON.stringify(newPasswords));

      toast.success("Password saved!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      // Reset form after saving
      setform({ site: "", username: "", password: "" });
    } else {
      toast.error("Password length is too short!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
    }
  };

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this password?");
    if (c) {
      const newPasswords = passwordarray.filter((item) => item.id !== id); // Corrected issuepassword
      setpasswordarray(newPasswords);
      localStorage.setItem("passwords", JSON.stringify(newPasswords));
      toast("Password Deleted!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    //setform({ site: "", username: "", password: "" });
  };
  const editPassword = (id) => {
    // Find the password entry to edit
    const passwordToEdit = passwordarray.find((i) => i.id === id);
    if (!passwordToEdit) return; // Exit if no match found

    // Set form values to the selected entry
    setform(passwordToEdit);

    // Remove the old entry from the array
    const updatedPasswords = passwordarray.filter((item) => item.id !== id);
    setpasswordarray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const copytext = (text) => {
    toast("Copied to clipboard", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="md:apna p-2  md:p-0 max-w-4xl">
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
          <div className="flex flex-col md:flex-row w-full gap-8">
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
                ref={passwordref}
                placeholder="Enter Password"
                className="rounded-full p-3 pr-10 pl-4 py-1 w-full border border-green-500"
                type="password"
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
            className="flex justify-center mx-auto rounded-full bg-green-500 items-center w-fit px-3 my-3 gap-1 py-1 hover:bg-green-400 border-1 border-green-950"
            onClick={savepassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save
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
                  <th className="w-32 text-center"> Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordarray.map((item, index) => (
                  <tr key={index}>
                    {/* Site Column */}
                    <td className="py-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <a
                          href={item.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.site}
                        </a>
                        <img
                          className="w-4 h-4 cursor-pointer"
                          src="icons/copy.png"
                          alt="Copy Site"
                          onClick={() => {
                            copytext(item.site);
                          }}
                        />
                      </div>
                    </td>

                    {/* Username Column */}
                    <td className="py-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {item.username}
                        <img
                          className="w-4 h-4 cursor-pointer"
                          src="icons/copy.png"
                          alt="Copy Username"
                          onClick={() => {
                            copytext(item.username);
                          }}
                        />
                      </div>
                    </td>

                    {/* Password Column */}
                    <td className="py-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {item.password}
                        <img
                          className="w-4 h-4 cursor-pointer"
                          src="icons/copy.png"
                          alt="Copy Password"
                          onClick={() => {
                            copytext(item.password);
                          }}
                        />
                      </div>
                    </td>
                    <td className="py-2 text-center">
                      <span
                        className="mx-1 cursor-pointer"
                        onClick={() => {
                          editPassword(item.id);
                        }}
                      >
                        <script src="https://cdn.lordicon.com/lordicon.js"></script>
                        <lord-icon
                          src="https://cdn.lordicon.com/vwzukuhn.json"
                          trigger="hover"
                          style={{ width: "23px", height: "22px" }}
                        ></lord-icon>
                      </span>
                      <span
                        className="mx-1 cursor-pointer"
                        onClick={() => {
                          deletePassword(item.id);
                        }}
                      >
                        <script src="https://cdn.lordicon.com/lordicon.js"></script>
                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          style={{ width: "23px", height: "22px" }}
                        ></lord-icon>
                      </span>
                    </td>
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
