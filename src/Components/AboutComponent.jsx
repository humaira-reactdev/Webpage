import React from 'react'
import { CommonHead2 } from './CommonHead2'
import IDoCard from './IDoCard'

const AboutComponent = () => {
  return (
    <>
        <section className='about'> 
            <div className="container">
                <div className='w-full rounded-[20px] bg-white pt-[60px] px-[80px] '>
                    <CommonHead2 CommonHead2Title='What I Do!'/>
                    <div className='flex flex-wrap justify-center gap-[30px] mt-[50px]'>
                        <IDoCard cardColour='bg-[#fff4f4]' cardHead='Ui/Ux Design' cardImg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/design.svg'cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                        <IDoCard cardColour='bg-[#fff4f4]' cardHead='App Development' cardImg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/app-development.svg'cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                        <IDoCard cardColour='bg-[#fff4f4]' cardHead='Photography' cardImg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/photograph.svg'cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                        <IDoCard cardColour='bg-[#fff4f4]' cardHead='Web Development' cardImg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/webdev.svg'cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                        <IDoCard cardColour='bg-[#fff4f4]' cardHead='Management' cardImg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/management.svg'cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                        <IDoCard cardColour='bg-[#fff4f4]' cardHead='Web Development' cardImg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/webdev.svg'cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                    </div>
                </div>

            </div>

        </section>
    </>
  )
}

export default AboutComponent