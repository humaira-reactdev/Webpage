import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiBriefcase } from "react-icons/bi";
import { FaBlogger } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
        <nav>
            <div className="container">
                <div className="menu_row p-5 flex justify-between flex-wrap">
                    <div className="logo_col">
                        <Link to='#'><img src="images/logo-2.png" alt="logo"/></Link>
                    </div>
                    <div className="menu">
                        <ul className='flex flex-wrap gap-4 text-[13px] font-poppins font-medium text-inherit '>
                            <li><NavLink to='/' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><IoHomeOutline className='text-xl' />Home</NavLink></li>
                            <li><NavLink to='/about' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><IoPersonOutline className='text-xl' />About</NavLink></li>
                            <li><NavLink to='/resume' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><IoDocumentTextOutline className='text-xl' />Resume</NavLink></li>
                            <li><NavLink to='/work' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><BiBriefcase className='text-xl' />Works</NavLink></li>
                            <li><NavLink to='/blog' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><FaBlogger className='text-xl' />Blog</NavLink></li>
                            <li><NavLink to='/contact' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><RiContactsBook3Line className='text-xl' />Contact</NavLink></li>
                        </ul>
                    </div>

                </div>
            </div>

        </nav>
    
    </>
  )
}

export default Navbar