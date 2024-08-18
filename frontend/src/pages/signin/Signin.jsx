import React, { useState } from 'react';
import useSignin from '../../hooks/useSignin';

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { signin, loading } = useSignin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signin({ username, password });
    }

    return (
        <div className='flex flex-col items-center justify-center w-96 mx-auto my-64'>
            <div className='w-full p-6 rounded-lg shadow-2xl border-2 border-indigo-100'>
                <h1 className='text-3xl font-semibold text-center text-gray-400'>
                    Signin <span className='text-blue-500'>Chat App</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        type="text" 
                        placeholder='Enter username' 
                        className="w-full input input-bordered h-10 max-w-xs" 
                    />
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password" 
                        placeholder='Enter password' 
                        className="w-full input input-bordered h-10 max-w-xs" 
                    />
                    <div className='mt-4'>
                        <span className='text-center text-sm text-gray-400'>
                            Don't have an account? 
                            <a href='/signup' className='text-blue-500 hover:underline'>Signup</a>
                        </span>
                    </div>
                    <div className='mt-4'>
                        <button 
                            type="submit" 
                            className='btn btn-primary min-w-full' 
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : 'Signin'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;
