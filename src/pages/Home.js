import React from 'react';
import { ReactComponent as Banner } from '../assets/banner.svg';
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
    <div className='flex flex-col items-center p-10'>
      <div className='flex justify-center font-bold text-4xl pt-10'>
        <h1 style={{ color: '#30343F' }}>Welcome to <span style={{ color: '#273469' }} >Expense Tracker</span></h1>
      </div>
      <h3 className='text-center p-2 font-md'>Track and manage your expenses at ease</h3>
      <div className='flex flex-row items-center pt-10'>
        <div className='p-4'>
          <button style={{ color: '#273469', borderColor: '#273469'}} className='border-2 rounded-md px-14 py-4 font-semibold'
          onClick={handleLogin}>
            Log In
          </button>
        </div>
        <div>
          <button style={{ backgroundColor: '#273469', borderColor: '#273469'}} className='rounded-md border-2 px-14 py-4 text-white font-semibold'
          onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
      <Banner className='w-92 h-80 pt-10' />
    </div>
  )
}

export default Home
