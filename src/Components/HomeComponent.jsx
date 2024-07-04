import React from 'react'
import SocialButtons from './SocialButtons'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const HomeComponent = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <img src="images/parson-img-3.webp" alt="avatar" className='rounded-full mt-[150px]'/>
        <h2 className='text-[26px] font-medium mt-[30px] font-robotoslab'>Monalisa Ashley</h2>
        <p className='text-[14px] text-[#7b7b7b] font-medium font-poppins mt-[15px]'>Ui/Ux Designer</p>
        <div className='flex gap-[12px] mt-[20px] mb-[30px]'>
          <SocialButtons icons={<FaFacebookF className='text-[#1773EA]'/>}/>
          <SocialButtons icons={<FaTwitter className='text-[#1DA1F2]'/>}/>
          <SocialButtons icons={<FaInstagram className='text-[#E12A72]'/>}/>
          <SocialButtons icons={<FaLinkedinIn className='text-[#0A58CA]' />}/>
        </div>
        <button className=''>Download</button>

      </div>
      
        
        
    </>
  )
}

export default HomeComponent