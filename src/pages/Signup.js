import React from 'react';
import signupBanner from '../assets/signupBanner.svg';
import { FormGroup, Typography, Checkbox, FormControlLabel } from '@mui/material';


function Signup() {
  return (
    <div className='flex flex-row h-screen xs:flex-col xs:items-center md:flex-col md:items-center'>
      <div className='flex items-center justify-center w-[50%] xs:h-[40%] md:h-[40%]'>
        <img src={signupBanner} 
        className='w-80 h-80 xs:w-full xs:h-[70%] md:w-full md:p-8' alt='signupBanner' />
      </div>
      <div className='bg-white w-[50%] h-full flex flex-col items-center justify-center space-y-2
        xs:w-[100%] xs:h-full xs:space-y-2 md:w-[100%]'>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <h1 style={{ color: '#273469' }} 
            className='font-semibold text-5xl xs:text-3xl' >Create an Account</h1>
          <h5 className='text-l xs:text-sm '>Already have an Account?<span style={{ color: '#273469' }}> Log in </span></h5>
          <input type="email" name="email" 
            className="p-2 w-[80%] bg-white border shadow-sm border-slate-300 placeholder-slate-400 
            focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1
            xs:w-full" 
          placeholder="Email address" />
          <input type="password" name="password" 
            className="p-2 w-[80%] bg-white border shadow-sm border-slate-300 placeholder-slate-400 
            focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1
            xs:w-full" 
          placeholder="Password" />
          <button style={{ backgroundColor: '#273469', borderColor: '#273469'}} 
            className='rounded-md border-2 text-white font-semibold w-[80%] p-2
            xs:w-full'>
            Sign Up
          </button>
        </div>
            <FormGroup>
              <FormControlLabel 
              control={<Checkbox size='small'/>} 
              label={<Typography variant="caption">I agree to the <span style={{ color: '#273469' }}> Privacy Policy </span> 
              and <span style={{ color: '#273469' }}> Terms of Service </span></Typography>}/>
            </FormGroup>
      </div>
    </div>
  )
}

export default Signup