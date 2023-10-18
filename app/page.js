"use client";
import React, { useState } from "react";

const page = () => {
  const [tittle, settittle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const sumithand = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { tittle, desc }]);
    settittle("");
    setdesc("");
    console.log(maintask);
  };
  const deletehand = (i) => {
    let copytask = [...maintask];
    copytask.splice(i, 1);
    setmaintask(copytask);
  };
  let render = (
    <h2 className=" font-bold text-white">No Task Available broo!</h2>
  );
  if (maintask.length > 0) {
    render = maintask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className=" flex justify-between w-2/3 items-center">
            <h4 className="p-5 font-bold text-white items-center">
              {t.tittle}
            </h4>
            <h4 className="p-5 font-bold text-white items-center">{t.desc}</h4>
          </div>
          <button
            onClick={() => {
              deletehand(i);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <div className="h-screen">
        <h1 className="bg-black text-white font-bold text-4xl h-16 text-center p-4">
          {" "}
          Pankaj's Todo-App
        </h1>
        <form onSubmit={sumithand}>
          <input
            className="m-4 px-3 py-3 border-zinc-800 border-2 rounded-sm"
            placeholder="Enter your task Here?"
            value={tittle}
            onChange={(e) => {
              settittle(e.target.value);
            }}
          ></input>
          <input
            className="m-4 px-3 py-3 border-zinc-800 border-2 rounded-sm"
            placeholder="Enter your description here?"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          ></input>
          <button className="bg-black text-white font-bold rounded px-4 py-5 m-5">
            Add Task
          </button>
        </form>
        <hr />
        <div className="p-8 bg-slate-400 font-bold">
          <ul>{render}</ul>
        </div>
      </div>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 class="text-lg mt-0 mb-2 text-blueGray-600">Enjoy!!</h5>
              <div class="mt-6 lg:mb-0 mb-6"></div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2023</span>
                <a
                  href="#"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                />{" "}
                this is made for fun by Pankaj .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default page;
