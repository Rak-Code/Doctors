import React, { useState } from 'react'; 
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'



const Navbar = () => {
  
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);


  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img src={assets.logo} alt="logo" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to='/'>
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/doctors'>
          <li>Doctors</li>
          <hr />
        </NavLink>

        <NavLink to='about'>
          <li>About</li>
          <hr />
        </NavLink>

        <NavLink to='contact'>
          <li>Contact</li>
          <hr />
        </NavLink>
        
        
      </ul>
      <div>
        {
          token ?
          <div className='flex items-center gap-4 cursor-pointer group relative'>
            <img className='w-8 rounded-full ' src={assets.profile_pic} alt='pic'/>
            <img className='w-0.25' src={assets.dropdown_icon} alt='pic'/>
            <div className='absolute top-0 right-0 pt-14 text-base font medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='mon-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p  onClick={()=> navigate('/my-profile')} className='hover:text-black cursor-pointer'>Profile</p>
                <p onClick={()=> navigate('/my-appointment')} className='hover:text-black cursor-pointer'>Appointment</p>
                <p onClick={()=> setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
          :
          <button onClick={() => navigate('/login')} className='bg-primary text-white font-light rounded-full px-8 py-3 hidden md:block'>
          Create Account
        </button>

        }
        
      </div>
    </div>
  )
}

export default Navbar
