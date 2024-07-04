import React from 'react'
import { Link } from 'react-router-dom'


const SocialButtons = ({icons}) => {
  return (
    <>
        <Link to='#' className='w-[40px] h-[40px] rounded-lg bg-[#f3f6f6] flex justify-center items-center'>
            {icons}
        </Link>
    
    </>
  )
}

export default SocialButtons