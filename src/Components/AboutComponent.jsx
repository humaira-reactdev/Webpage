import React from 'react'
import { CommonHead2 } from './CommonHead2'
import IDoCard from './IDoCard'
import CommonHead1 from './CommonHead1'
import SocialButtons from './SocialButtons'
import { CiMobile1 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaRegCalendarDays } from "react-icons/fa6";


const AboutComponent = () => {
  return (
    <>
        <section className='about'> 
            <div className="container">
                <div className='w-full rounded-[20px] bg-white pt-[60px] px-[80px] '>
                    <CommonHead1 commonhead1title='About Me'/>
                    <div className='aboutMe flex py-[50px] gap-[50px]'>
                        <img src="../public/images/parson-img-2.webp" alt="picture" className='w-[400px]'/>
                        <div className='aboutText '>
                            <div className='whoami'>
                                <h2 className='text-[26px] font-poppins text-black font-medium leading-[39px] mb-[15px]'>Who am I?</h2>
                                <p className='text-[16px] font-poppins text-[#44566c] font-normal leading-[27px] w-[500pxs]'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p> <br />
                                <p className='text-[16px] font-poppins text-[#44566c] font-normal leading-[27px]'>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                            </div>
                            <div className='personalinfo py-[20px]'>
                                <h2 className='text-[28px] font-poppins text-black font-medium'>Personal Info</h2>
                                    <div className='top flex gap-[227px] py-[20px]'>
                                        <div className='phone flex gap-[8px]'>
                                            <SocialButtons icons={<CiMobile1 className='text-[#E93B81] text-[22px]'/>}/>
                                            <div className='phonetext'>
                                                <h3 className='font-poppins font-normal text-[12px] text-[#44566c]'>Phone</h3>
                                                <p className='font-poppins font-normal text-black leading-[24px]'>+123 456 7890</p>
                                            </div>
                                        </div>
                                        <div className='email flex gap-[8px]'>
                                            <SocialButtons icons={<SlEnvolopeLetter className='text-[#6AB5B9] text-[22px]'/>}/>
                                            <div className='emailtext'>
                                                <h3 className='font-poppins font-normal text-[12px] text-[#44566c]'>Email</h3>
                                                <p className='font-poppins font-normal text-black leading-[24px]'>Example@Mail.Com</p>
                                            </div>
                                        </div>     

                                    </div>
                                    <div className='bottom flex gap-[200px]'>
                                        <div className='location flex gap-[8px]'>
                                            <SocialButtons icons={<FaLocationDot className='text-[#E93B81] text-[22px]'/>}/>
                                            <div className='locationtext'>
                                                <h3 className='font-poppins font-normal text-[12px] text-[#44566c]'>Location</h3>
                                                <p className='font-poppins font-normal text-black leading-[24px]'>Hong Kong China</p>
                                            </div>
                                        </div>
                                        <div className='birthday flex gap-[8px]'>
                                            <SocialButtons icons={<FaRegCalendarDays className='text-[#C17CEB] text-[22px]'/>}/>
                                            <div className='phonetext'>
                                                <h3 className='font-poppins font-normal text-[12px] text-[#44566c]'>Birthday</h3>
                                                <p className='font-poppins font-normal text-black leading-[24px]'>May 27, 1990</p>
                                            </div>
                                        </div>     

                                    </div>
                                                                   
                            </div>                          
                        </div>
                    </div>
                    
                    <CommonHead2 CommonHead2Title='What I Do!'/>
                    <div className='flex flex-wrap justify-center gap-[30px] mt-[50px]'>
                        <IDoCard cardColour='bg-[#fff4f4]' cardHead='Ui/Ux Design' cardImg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/design.svg'cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                        <IDoCard cardColour='bg-[#eef5fa]' cardHead='App Development' cardImg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/app-development.svg'cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                        <IDoCard cardColour='bg-[#fff4f4]' cardHead='Photography' cardImg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/photograph.svg'cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                        <IDoCard cardColour='bg-[#eef5fa]' cardHead='Web Development' cardImg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/webdev.svg'cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                        <IDoCard cardColour='bg-[#fff4f4]' cardHead='Management' cardImg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/management.svg'cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                        <IDoCard cardColour='bg-[#eef5fa]' cardHead='Web Development' cardImg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/webdev.svg'cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                    </div>
                </div>

            </div>

        </section>
    </>
  )
}

export default AboutComponent