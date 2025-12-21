import React from 'react'
import 'boxicons/css/boxicons.min.css';

const Header = () => {
    // Toggle Mobile Menu 
    const toggleMenu = () => {
        const mobilemenu = document.getElementById('mobilemenu');
        if(mobilemenu.classList.contains('hidden')){
            mobilemenu.classList.remove('hidden');
        } else {
            mobilemenu.classList.add('hidden');
        }
}

  return (
    <header className='flex justify-between items-center py-4 px-4 lg:px-20'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>RoboB</h1>

      <nav className='hidden md:flex items-center gap-12'>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">HOME</a>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">CONTENTS</a>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">ABOUT</a>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">CONTACT</a>
      </nav>

      <button className='hidden md:block bg-gray-400 text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-gray-600 cursor-pointer z-50'>
        Sign In
      </button>

      <button onClick={toggleMenu} className='md:hidden text-3xl p-2 z-50 transition-all duration-500 hover:text-orange-700 cursor-pointer'>
        <i class='bx bx-menu'></i>
      </button>

      <div id='mobilemenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'>
        <nav className='flex flex-col gap-6 items-center'>
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">HOME</a>
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">CONTENTS</a>
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">ABOUT</a>
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">CONTACT</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;
