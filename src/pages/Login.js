import React from 'react';
import homeBanner from '../assets/homeBanner.svg';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';


function Login() {

  return (
    <div className='flex flex-row h-screen'>
      <div className='flex items-center justify-center w-[50%]'>
      <img src={homeBanner} className='w-92 h-80' alt='homeBanner' />
      </div>
      <div className='bg-white w-[50%] h-full flex flex-col items-center justify-center space-y-4'>
        <div className='flex flex-col items-center justify-center m-8'>
          <h1 className='font-semibold text-5xl' style={{ color: '#273469' }}>Welcome back!</h1>
          <h5 className='text-l mt-2'>Don't have an Account yet?<span style={{ color: '#273469' }}> Sign up Now </span></h5>
        </div>
        <input type="email" name="email" 
          class="p-2 w-[50%] bg-white border shadow-sm border-slate-300 placeholder-slate-400 
          focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" 
          placeholder="Email address" />
        <input type="email" name="email" 
          class="p-2 w-[50%] bg-white border shadow-sm border-slate-300 placeholder-slate-400 
          focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" 
          placeholder="Password" />
        <button style={{ backgroundColor: '#273469', borderColor: '#273469'}} 
          className='rounded-md border-2 text-white font-semibold w-[50%] p-2'>
          Log In
        </button>
          <div className='flex flex-row space-x-20 items-center justify-center'>
            <FormGroup>
              <FormControlLabel control={<Checkbox size='small'/>} 
              label={<Typography variant="caption">Keep me logged in</Typography>}/>
            </FormGroup>
            <Typography variant="caption">
            <span style={{ color: '#273469' }}> Forgot password?</span>
            </Typography>
          </div>
          {/*<div className='flex flex-row'>
            <div className='w-full h-[1px] bg-black' />
            <p className="mx-4 mt-4 text-center font-normal text-sm text-zinc-800">Or</p>
          </div>
          <button className='flex flex-row items-center justify-center rounded-md mt-2 border-2 px-16 py-2 text-white font-semibold border-zinc-500'>
            <FcGoogle className='mr-2' />
            <span className='text-zinc-500'>Continue with Google</span>
          </button>*/}
      </div>
    </div>
  )
}

export default Login