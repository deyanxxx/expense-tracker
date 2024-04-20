import React from 'react';

function Home() {
  return (
    <div className='flex flex-col items-center p-16'>
      <div className='flex justify-center font-bold text-4xl'>
        <h1 style={{ color: '#30343F' }}>Welcome to </h1>
        {' '}
        {/* Space */}
        <h1 style={{ color: '#273469' }} className='ml-2'>Expense Tracker</h1>
      </div>
      <h3 className='text-center p-2 font-md'>Track and manage your expenses at ease</h3>
      <div className='flex flex-row items-center pt-10'>
        <div className='p-4'>
        <button style={{ color: '#273469', borderColor: '#273469'}} className='border-2 rounded-md px-14 py-4 font-semibold'>Log In</button>
        </div>
        <div>
        <button style={{ backgroundColor: '#273469', borderColor: '#273469'}} className='rounded-md border-2 px-14 py-4 text-white font-semibold'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Home
