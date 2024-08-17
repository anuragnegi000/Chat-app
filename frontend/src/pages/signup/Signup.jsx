import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl border-2 border-indigo-100">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          Signup
          <span className="text-blue-500"> Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 max-w-xs"
            />
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 max-w-xs"
            />
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 max-w-xs"
            />
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 max-w-xs"
            />
            <GenderCheckbox/>
          </div>
          <div className="mt-4">
            <span className="text-base label-text">Already have an account?</span>
            <a href="/signin" className="text-blue-500"> Signin</a>
          </div>
          <div>
            <button className="btn btn-primary mt-4 min-w-full">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
