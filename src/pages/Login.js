import React from 'react';
import homeBanner from '../assets/homeBanner.svg';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Overview');
  };

  return (
    <div className='flex flex-row h-screen xs:flex-col xs:items-center md:flex-col md:items-center'>
      <div className='flex items-center justify-center w-[50%] xs:h-[40%] md:h-[40%]'>
        <img src={homeBanner} 
        className='w-80 h-80 xs:w-full xs:h-[70%] md:w-full md:p-8' alt='signupBanner' />
      </div>
      <div className='bg-white w-[50%] h-full flex flex-col items-center justify-center space-y-2
        xs:w-[100%] xs:h-full xs:space-y-2 md:w-[100%]'>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <h1 style={{ color: '#273469' }} 
            className='font-semibold text-5xl xs:text-3xl' >Welcome Back</h1>
          <h5 className='text-l xs:text-sm '>Don't have an account yet?<span style={{ color: '#273469' }}> Sign up Now </span></h5>
          <input type="email" name="email" 
            className="p-2 w-[100%] bg-white border shadow-sm border-slate-300 placeholder-slate-400 
            focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1
            xs:w-full" 
          placeholder="Email address" />
          <input type="password" name="password" 
            className="p-2 w-[100%] bg-white border shadow-sm border-slate-300 placeholder-slate-400 
            focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1
            xs:w-full" 
          placeholder="Password" />
          <button style={{ backgroundColor: '#273469', borderColor: '#273469'}} 
            className='rounded-md border-2 text-white font-semibold w-[100%] p-2
            xs:w-full'
            onClick={handleLogin}>
            Log In
          </button>
        </div>
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