import React from 'react';
import signupBanner from '../assets/signupBanner.svg';
import { FcGoogle } from "react-icons/fc";


function Signup() {
  return (
    <div className='flex flex-row h-screen'>
      <div className='flex h-full items-center justify-center'>
        <img src={signupBanner} alt='signupBanner' />
      </div>
      <div className='bg-white w-[50%] h-full flex flex-col items-center justify-center space-y-8'>
        <h1 className='font-semibold text-5xl' style={{ color: '#273469' }}>Create an Account</h1>
        <div className='flex flex-row'>
          <h5 className='text-xl'>Already have an Account?<span style={{ color: '#273469' }}> Log in </span></h5>
        </div>
        <input type="email" name="email" 
        class="p-2 w-[35%] bg-white border shadow-sm border-slate-300 placeholder-slate-400 
        focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" 
        placeholder="Email address" />
        <input type="email" name="email" 
        class="p-2 w-[35%] bg-white border shadow-sm border-slate-300 placeholder-slate-400 
        focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" 
        placeholder="Password" />
          <button style={{ backgroundColor: '#273469', borderColor: '#273469'}} className='rounded-md border-2 text-white font-semibold w-[35%] p-2'>
            Sign Up
          </button>
           <div className='flex flex-row space-x-2 items-center'>
           <input type="checkbox" style={{ height: '20px', width: '20px' }} />
            <h5 className='text-md'>I agree to the <span style={{ color: '#273469' }}> Privacy Policy </span> and  
            <span style={{ color: '#273469' }}> Terms of Service </span></h5>
          </div>
          <div className='flex flex-row items-center space-x-2'>
            <div className='h-[1px] w-full bg-black' style={{ whiteSpace: 'pre-wrap' }}>                         </div>
              <p className="text-center font-normal text-md text-zinc-800">Or</p>
            <div className='h-[1px] w-full bg-black' style={{ whiteSpace: 'pre-wrap' }}>                                                            </div>

          </div>
          <button className='flex flex-row items-center justify-center rounded-md border-2 text-white font-semibold w-[35%] p-2 border-zinc-500 space-x-2'>
            <FcGoogle style={{ height: '20px', width: '20px' }}/>
            <span className='text-zinc-500'>Continue with Google</span>
          </button>
      </div>
    </div>
  )
}

export default Signup