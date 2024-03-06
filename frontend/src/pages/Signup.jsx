import React from "react";
import GenderCheckbox from "../utils/GenderCheckbox";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          Sign Up
          <span className="text-blue-300">Anon App</span>
        </h1>

        <form action="">
          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-blue-300">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Gavin Belson"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-blue-300">
                Enter Password
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-blue-300">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Gavin Belson"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckbox />

          <a
            href="#"
            className="text-sm text-blue-300 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block text-slate-100 btn-outline hover:bg-blue-300 mt-2">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
