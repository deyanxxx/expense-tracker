import React from 'react';
import signupBanner from '../assets/signupBanner.svg';


function Signup() {
  return (
    <div className='flex flex-row h-screen justify-between items-center'>
      <div className='items-center justify-center h-screen m-auto'>
      <img src={signupBanner} className='w-92 h-80' alt='signupBanner' />
      </div>
      <div className='bg-white w-1/2 h-full flex flex-col items-center justify-center'>
        <h1>Create an Account</h1>
        <div className='flex flex-row'>
          <h5>Already have an Account?</h5>
          <h5 className='text-blue-800'>Log in</h5>
        </div>
      </div>
    </div>
  )
}

export default Signup