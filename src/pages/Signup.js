import React from 'react';
import signupBanner from '../assets/signupBanner.svg';
import { FormGroup, Typography, Checkbox, FormControlLabel } from '@mui/material';


function Signup() {
  return (
    <div className='flex flex-row h-screen'>
      <div className='flex items-center justify-center w-[50%]'>
        <img src={signupBanner} className='w-80 h-80' alt='signupBanner' />
      </div>
      <div className='bg-white w-[50%] h-full flex flex-col items-center justify-center space-y-4'>
        <div className='flex flex-col items-center justify-center m-8'>
          <h1 className='font-semibold text-5xl' style={{ color: '#273469' }}>Create an Account</h1>
          <h5 className='text-l mt-2'>Already have an Account?<span style={{ color: '#273469' }}> Log in </span></h5>
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
            Sign Up
          </button>
            <FormGroup>
              <FormControlLabel control={<Checkbox size='small'/>} 
              label={<Typography variant="caption">I agree to the <span style={{ color: '#273469' }}> Privacy Policy </span> 
              and <span style={{ color: '#273469' }}> Terms of Service </span></Typography>}/>
            </FormGroup>
      </div>
    </div>
  )
}

export default Signup