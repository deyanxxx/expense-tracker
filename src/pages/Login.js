import React from 'react';
import homeBanner from '../assets/homeBanner.svg';
import { FcGoogle } from "react-icons/fc";
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

function Login() {

  return (
    <div className='flex flex-row h-screen justify-between items-center'>
      <div className='items-center justify-center h-screen m-auto'>
      <img src={homeBanner} className='w-92 h-80' alt='homeBanner' />
      </div>
      <div className='bg-white w-1/2 h-full flex flex-col items-center justify-center'>
        <h1 className='font-bold text-3xl' style={{ color: '#273469' }}>Welcome Back</h1>
        <div className='flex flex-row mb-8 mt-2'>
          <p className='text-sm'>Don't have an Account yet?<span style={{ color: '#273469' }}> Sign up </span></p>
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
            Log In
          </button>
          <div className='flex flex-row space-x-10 items-center justify-center'>
            <FormGroup>
              <FormControlLabel control={<Checkbox size='small'/>} 
              label={<Typography variant="caption">Keep me logged in</Typography>}/>
            </FormGroup>
            <Typography variant="caption">
              Forgot password?
            </Typography>
          </div>
          <div className='flex flex-row'>
            <div className='w-full h-[1px] bg-black' />
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

export default Login