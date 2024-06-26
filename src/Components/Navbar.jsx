import React from 'react'
import { Link } from 'react-router-dom'
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
                            <li><Link className='gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg' to='#'><IoHomeOutline className='text-xl' />Home</Link></li>
                            <li><Link className='gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg' to='#'><IoPersonOutline className='text-xl' />About</Link></li>
                            <li><Link className='gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg' to='#'><IoDocumentTextOutline className='text-xl' />Resume</Link></li>
                            <li><Link className='gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg' to='#'><BiBriefcase className='text-xl' />Works</Link></li>
                            <li><Link className='gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg' to='#'><FaBlogger className='text-xl' />Blog</Link></li>
                            <li><Link className='gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg' to='#'><RiContactsBook3Line className='text-xl' />Contact</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

        </nav>
    
    </>
  )
}

export default Navbar