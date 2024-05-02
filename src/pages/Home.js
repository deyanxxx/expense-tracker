import React from 'react';
import Banner from '../assets/banner.svg';
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Login');
  };

  const handleSignup = () => {
    navigate('/Signup');

    
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen xs:text-left'>
      <div className='flex flex-col items-center justify-center'>
        <h1 style={{ color: '#30343F' }} className='font-bold text-4xl xs:text-2xl'>Welcome to <span style={{ color: '#273469' }} >Expense Tracker</span></h1>
        <p className='p-2 text-xl xs:text-sm'>Track and manage your expenses at ease</p>
      </div>
      <div className='flex flex-row items-center mt-2 space-x-4'>
        <div className='p-4'>
          <button style={{ color: '#273469', borderColor: '#273469'}} 
          className='border-2 rounded-md px-12 py-4 font-semibold xs:py-2 xs:px-8'
          onClick={handleLogin}>
            Log In
          </button>
        </div>
        <div>
          <button style={{ backgroundColor: '#273469', borderColor: '#273469'}} 
          className='rounded-md border-2 px-12 py-4 text-white font-semibold xs:py-2 xs:px-8'
          onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
      <img src={Banner} className='w-92 h-80 pt-10 xs:w-[75%]' alt='Banner' />
    </div>
  )
}

export default Home
