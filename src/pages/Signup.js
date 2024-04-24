import React from 'react';
import signupBanner from '../assets/signupBanner.svg';
import { FcGoogle } from "react-icons/fc";


function Signup() {
  return (
    <div className='flex flex-row h-screen justify-between items-center'>
      <div className='items-center justify-center h-screen m-auto'>
      <img src={signupBanner} className='w-92 h-80' alt='signupBanner' />
      </div>
      <div className='bg-white w-1/2 h-full flex flex-col items-center justify-center'>
        <h1 className='font-semibold text-3xl' style={{ color: '#273469' }}>Create an Account</h1>
        <div className='flex flex-row mb-8 mt-2'>
          <h5 className='text-sm'>Already have an Account?<span style={{ color: '#273469' }}> Log in </span></h5>
        </div>
        <input type="email" name="email" 
        class="mt-1 mb-1 px-3 py-2 w-80 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
        focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" 
        placeholder="Email address" />
        <input type="email" name="email" 
        class="mt-1 mb-4 px-3 py-2 w-80 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
        focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" 
        placeholder="Password" />
          <button style={{ backgroundColor: '#273469', borderColor: '#273469'}} className='rounded-md border-2 px-32 py-2 text-white font-semibold
           m-4'>
            Sign Up
          </button>
          <div className='flex flex-row'>
            <input type="checkbox" class="default:ring-2 mr-2" />
            <h5 className='text-xs '>I agree to the <span style={{ color: '#273469' }}> Privacy Policy </span> and  
            <span style={{ color: '#273469' }}> Terms of Service </span></h5>
          </div>
          <div className='flex flex-row'>
            <div className='my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-zinc-800 after:mt-0.5 after:flex-1 after:border-t after:border-zinc-800 before:border-' />
            <p className="mx-4 mt-4 text-center font-normal text-sm text-zinc-800">Or</p>
          </div>
          <button className='flex flex-row items-center justify-center rounded-md mt-2 border-2 px-16 py-2 text-white font-semibold border-zinc-500'>
            <FcGoogle className='mr-2' />
            <span className='text-zinc-500'>Continue with Google</span>
          </button>
      </div>
    </div>
  )
}

export default Signup