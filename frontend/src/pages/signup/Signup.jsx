    import React, { useState } from "react";
    import GenderCheckbox from "./GenderCheckbox";
    import useSignup from "../../hooks/useSignup";

    const Signup = () => {
        const [inputs,setInputs]=useState({
            fullName:"",
            username:"",
            password:"",
            confirmPassword:"",
            gender:"",
        })
        
        const {loading,signup}=useSignup();

        const handleSubmit=async (e)=>{
            e.preventDefault()
            alert(JSON.stringify(inputs))
            await signup(inputs)
        }


        const handleCheckboxChange=(gender)=>{
            setInputs({...inputs,gender})
        }

    return (
        <div className="flex flex-col items-center justify-center w-96 mx-auto my-32">
        <div className="w-full p-6 rounded-lg shadow-2xl border-2 border-indigo-100">
            <h1 className="text-3xl font-semibold text-center text-gray-400">
            Signup
            <span className="text-blue-500"> Chat App</span>
            </h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label className="label p-2" htmlFor="">
                <span className="text-base label-text">Full Name</span>
                </label>
                <input
                type="text"
                placeholder="Enter username"
                className="w-full input input-bordered h-10 max-w-xs"
                value={inputs.fullName}
                onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
                />
                <label className="label p-2" htmlFor="">
                <span className="text-base label-text">Username</span>
                </label>
                <input
                type="text"
                placeholder="Enter username"
                className="w-full input input-bordered h-10 max-w-xs"
                value={inputs.username}
                onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                />
                <label className="label p-2" htmlFor="">
                <span className="text-base label-text">Password</span>
                </label>
                <input
                type="text"
                placeholder="Enter username"
                className="w-full input input-bordered h-10 max-w-xs"
                value={inputs.password}
                onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                />
                <label className="label p-2" htmlFor="">
                <span className="text-base label-text">Confirm Password</span>
                </label>
                <input
                type="text"
                placeholder="Enter username"
                className="w-full input input-bordered h-10 max-w-xs"
                value={inputs.confirmPassword}
                onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                />
                <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
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
