import React from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/logo.png'

function NavBar() {
  return (
    <header className='jb-bg'>
        <div className='container mx-auto flex justify-end py-4 px-20'>
            <nav className='flex'>
                <NavLink to='/' exact className='inline-flex items-center py-6 px-3 mr-4'>
                    <img src={image} alt="" className='w-1/6' />
                </NavLink>
                <NavLink to='/about' className='inline-flex items-center py-6 px-3 mr-4 paralucent text-white'>
                    About
                </NavLink>
                <NavLink to='/project' className='inline-flex items-center py-6 px-3 mr-4 paralucent text-white'>
                    Projects
                </NavLink>
                <NavLink to='/post' className='inline-flex items-center py-6 px-3 mr-4 paralucent text-white'>
                    Blog
                </NavLink>
                <NavLink to='/contact' className='inline-flex items-center py-6 px-3 mr-4 paralucent text-white'>
                    Contact
                </NavLink>
            </nav>
        </div>
    </header>
  )
}

export default NavBar