import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-300"> Anon App</span>
        </h1>

        <form action="">
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-blue-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label htmlFor="" className="label">
              <span className="text-base label-text text-blue-300">
                Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <a
            href="#"
            className="text-sm text-blue-300 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-block text-slate-100 btn-outline hover:bg-blue-300 mt-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
