import ClientTesrimonials from '../Components/Cards/ClientTestimonials';
import FormLableInput from '../Components/Form/LableInput';
import Textarea from '../Components/Form/Textarea';
import RightArrow from '../Components/SVGs/RightArrow';
import sectionImage from '../assets/Images/section.png'
import sectionMobile from '../assets/Images/sectionMobile.png'
import MobileImage1 from '../assets/Images/mobile1.png'
import MobileImage2 from '../assets/Images/mobile2.png'
import Mobile1 from '../assets/Images/mobile1111.png'
import Mobile2 from '../assets/Images/mobile2 copy.png'
import Mobile3 from '../assets/Images/mobile3.png'
import Mobile4 from '../assets/Images/mobile4.png'
import BgImage from '../assets/Images/121212.png'




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
// Import required modules
import { Autoplay , Navigation } from 'swiper/modules';
// import ClientTesrimonials from '../Components/Cards/ClientTestimonials';


import 'swiper/swiper-bundle.css'; // Ensure you have the Swiper CSS

import React, { useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';
import ProjectPortfolioCard from '../Components/Cards/ProjectPortfolioCard';




function CaseStudiesDetails() {
    return (
        <>
            <section className=" w-full bg-no-repeat bg-cover bg-center bg-[#19395f]  " style={{backgroundImage : `url(${sectionImage})`}}>
                <div className='max-w-[1200px] mx-auto px-[15px] md:px-[20px] pt-[52px] '>
                    <h3 className='text-[19px] md:text-[22px] font-[600] text-center text-[#0D99FF] '>Explore our ventures</h3>
                    <h2 className=' text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] mt-[10px] text-[#fff] font-[600] text-center '>Quick, Reliable and Affordable Services</h2>
                    <div className='flex items-center justify-center mt-[32px]'>
                        <img src={sectionMobile} alt="" />
                    </div>
                </div>
            </section>
            <div className='w-full bg-[#fff] '>
                <div className='max-w-[1200px] mx-auto px-[15px] md:px-[20px] mt-[72px] '>
                    <div className= " max-w-[1200px] mx-auto bg-[#E8F0FA] rounded-[20px] px-[38px] md:px-[62px] py-[30px] md:py-[46px] flex gap-[42px] md:flex-row flex-col md:items-start items-center " >
                        <div className="rounded-[50px] h-[220px] w-[220px] bg-cover bg-no-repeat bg-center " style={{backgroundImage : `url(${BgImage})` }} ></div>
                        <div className="flex-1 ">
                            <p className="text-[##000000] text-[18px] mt-[22px] line-clamp-4 " >We currently have several backend members on board for staff augmentation and are extremely pleased with their collaboration. We're super happy with the current team members and their valuable contributions.</p>
                            <div className="mt-[16px] " >
                                <h2 className="text-[14px] font-[600] text-[##000000] ">Rotem Hayoun-Meidav</h2>
                                <p className="text-[10px] font-[300] text-[##000000] ">CTO, Rise</p>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-[72px] flex justify-between gap-[42px] py-[32px] '>
                        <div className='flex-1 '>
                            <h2 className=" text-[#0A0E19] font-[600] leading-[50px] text-[26px] sm:text-[30px] md:text-[42px] ">Empowering Cashless Shopping Experience With Seamless Payments</h2>
                            <p className=" text-[15px] text-[#0A0E19] mt-[16px] ">Rise, formerly known as Deall, is a Buy Now Pay Later platform for the Egyptian market that offers customers a credit amount based on initial KYC. With this solution, customers can shop seamlessly across channels, making payments via a virtual card within the app, ensuring a hassle-free experience.</p>
                            <div className='mt-[22px] flex items-center max-w-max border border-[#0D99FF] cursor-pointer rounded-[9px] gap-[9px] px-[14px] py-[11px] '>
                                <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_587_5131)">
                                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#FFE773"/>
                                    <path d="M2.32759 15.8405C2.32759 21.8974 5.91724 27.1157 11.0858 29.4841C4.69978 27.7623 0 21.9297 0 15C0 6.71573 6.71573 0 15 0C17.2274 0 19.3409 0.48556 21.2418 1.35647C11.7328 -1.20562 2.32759 5.94336 2.32759 15.8405Z" fill="#FFF0A6"/>
                                    <path d="M14.9999 27.1111C21.6887 27.1111 27.1111 21.6887 27.1111 14.9999C27.1111 8.31104 21.6887 2.88867 14.9999 2.88867C8.31104 2.88867 2.88867 8.31104 2.88867 14.9999C2.88867 21.6887 8.31104 27.1111 14.9999 27.1111Z" fill="#FACF5F"/>
                                    <path d="M20.9746 11.7972C22.2347 11.9808 22.7384 13.53 21.8261 14.419L19.5282 16.6586L20.0707 19.8216C20.286 21.0772 18.9683 22.0341 17.8407 21.4418L15.0004 19.9483L12.1601 21.4418C11.0326 22.0341 9.71489 21.0772 9.93019 19.8216L10.4726 16.6586L8.1748 14.419C7.26252 13.53 7.76618 11.9808 9.02631 11.7972L12.2022 11.3362L13.6226 8.45841C14.1858 7.31595 15.8151 7.31595 16.3782 8.45841L17.7987 11.3362L20.9746 11.7972Z" fill="#FFF0A6"/>
                                    <path d="M16.4332 8.57026C16.2929 8.69634 16.172 8.8528 16.0795 9.0403L14.6591 11.9181L11.4832 12.3791C10.2231 12.5627 9.71941 14.1119 10.6317 15.0009L12.9295 17.2405L12.3871 20.4034C12.3334 20.7177 12.3754 21.0125 12.4867 21.2698L12.1601 21.4418C11.0326 22.0341 9.71489 21.0772 9.93019 19.8216L10.4726 16.6586L8.1748 14.419C7.26252 13.53 7.76618 11.9808 9.02631 11.7972L12.2022 11.3362L13.6226 8.45841C14.1858 7.31595 15.8151 7.31595 16.3782 8.45841L16.4332 8.57026Z" fill="#FFF8D6"/>
                                    <path d="M29.226 24.4711C29.9004 24.8396 29.9004 25.8082 29.226 26.1767L28.5439 26.5498L28.1708 27.2319C27.8023 27.9062 26.8338 27.9062 26.4652 27.2319L26.0922 26.5498L25.4101 26.1767C24.7357 25.8082 24.7357 24.8396 25.4101 24.4711L26.0922 24.098L26.4652 23.4159C26.8338 22.7416 27.8023 22.7416 28.1708 23.4159L28.5439 24.098L29.226 24.4711Z" fill="#FFF0A6"/>
                                    <path d="M25.689 3.59644C26.6045 4.09752 26.6045 5.41261 25.689 5.91304L24.7625 6.41994L24.2556 7.34644C23.7552 8.26196 22.4401 8.26196 21.939 7.34644L21.4321 6.41994L20.5056 5.91304C19.5901 5.41261 19.5901 4.09752 20.5056 3.59644L21.4321 3.09019L21.939 2.16369C22.4401 1.24752 23.7552 1.24752 24.2556 2.16369L24.7625 3.09019L25.689 3.59644ZM7.18597 19.554C7.86032 19.9225 7.86032 20.8911 7.18597 21.2596L6.50386 21.6327L6.1308 22.3148C5.76226 22.9891 4.79373 22.9891 4.42519 22.3148L4.05213 21.6327L3.37002 21.2596C2.69567 20.8911 2.69567 19.9225 3.37002 19.554L4.05213 19.1809L4.42519 18.4988C4.79373 17.8245 5.76226 17.8245 6.1308 18.4988L6.50386 19.1809L7.18597 19.554Z" fill="#FFF8D6"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_587_5131">
                                    <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <p className='text-[#0D99FF] text-[14px] font-[600] uppercase '>Finance</p>
                            </div>
                        </div>
                        <div className=' bg-[#11335A] w-[300px] rounded-[20px] px-[22px] py-[32px] flex flex-col items-center '>
                            <p className='text-[#fff] text-[32px] font-[300] text-center '>Build your idea to life</p>
                            <div className="flex items-center gap-[14px] bg-[#0D99FF] rounded-[7px] px-[22px] py-[12px] cursor-pointer mt-[16px] justify-center max-w-max ">
                                <p className="text-[#fff] text-[15px] font-[500] select-none ">Consult our Experts</p>
                                <div className="bg-[#fff] rounded-[50px] p-[6px] ">
                                    <RightArrow/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#10335A] '>
                <div className=' mx-w-[1200px] mx-auto px-[15px] md:px-[20px] pt-[72px] mt-[32px] '>
                    <h2 className=" text-center text-[#fff] font-[600] leading-[50px] text-[26px] sm:text-[30px] md:text-[42px] max-w-[660px] mx-auto ">Explore Shops</h2>
                    <p className=" text-[15px] text-[#fff] text-center mt-[16px] font-[300] ">Shop with ease by browsing through a wide range of products from your preferred brands and make purchases with just a few clicks.</p>
                    <div className='flex items-center justify-center mt-[40px] '>
                        <img src={sectionMobile} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#fff] '>
                <div className='max-w-[1200px] mx-auto px-[15px] md:px-[20px] py-[62px] '>
                    <div className='flex items-center justify-between gap-[22px] '>
                        <div className='flex-1 '>
                            <h2 className='text-[34px] text-[#001436] font-[600] '>Quick Verification</h2>
                            <p className='text-[#0A0E19] text-[13px] font-[300] mt-[7px] '>Easily verify your identity on the secure platform by positioning your face in the frame, taking a clear photo, and you’re done!</p>
                        </div>
                        <div className='flex-1 flex gap-[22px] justify-end '>
                            <img className=" h-[370px] " src={Mobile1} alt="" />
                            <img className=" h-[370px] " src={Mobile2} alt="" />
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-[22px] flex-row-reverse '>
                        <div className='flex-1 '>
                            <h2 className='text-[34px] text-[#001436] font-[600] '>Easy Return & Refund</h2>
                            <p className='text-[#0A0E19] text-[13px] font-[300] mt-[7px] '>Get a hassle-free return and refund experience with us. If you receive a damaged or incorrect product, simply request a return within the given time period.</p>
                        </div>
                        <div className='flex-1 flex gap-[22px] justify-start '>
                            <img className=" h-[370px] " src={Mobile3} alt="" />
                            <img className=" h-[370px] " src={Mobile4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#fff] '>
                <div className="max-w-[1200px] mx-auto py-[50px] px-[12px] md:px-[20px] ">
                    <div className='mt-[32px] flex items-center justify-between gap-[22px] sm:flex-row flex-col '>
                        <h2 className=' text-[#0A0E19] font-[600] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px] '>Look at other exciting projects in our portfolio</h2>
                        <div className=" flex items-center justify-center gap-[8px] ">
                            <button className="swiper-button-prev-Awards flex items-center justify-center h-[42px] w-[46px] cursor-pointer bg-[#fff] rounded-[12px] border border-[#0D99FF] ">
                                <svg width="18" height="15" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM21 7H1V9H21V7Z" fill="#0D99FF"/>
                                </svg>  
                            </button>
                            <button className="swiper-button-next-Awards flex items-center justify-center h-[42px] w-[46px] cursor-pointer bg-[#0D99FF] rounded-[12px] border border-[#0D99FF] ">
                                <svg width="18" height="15" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L14.3431 15.0711C13.9526 15.4616 13.3195 15.4616 12.9289 15.0711C12.5384 14.6805 12.5384 14.0474 12.9289 13.6569L18.5858 8L12.9289 2.34315C12.5384 1.95262 12.5384 1.31946 12.9289 0.928932C13.3195 0.538408 13.9526 0.538408 14.3431 0.928932L20.7071 7.29289ZM0 7H20V9H0V7Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                        <div className="flex items-center justify-center gap-[18px] mt-[30px] flex-wrap ">
                            <Swiper
                                slidesPerView={2}
                                navigation={{
                                    nextEl: '.swiper-button-next-Awards',
                                    prevEl: '.swiper-button-prev-Awards',
                                  }}
                                breakpoints={{
                                    
                                    100: {
                                        slidesPerView: 1,
                                        
                                    },
                                    800: {
                                        slidesPerView: 2,
                                        
                                    }
                                    }}
                                spaceBetween={10}
                                centeredSlides={true}
                                autoplay={{
                                delay: 1900,
                                disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[ Autoplay , Navigation]}
                                className="mySwiper w-full"
                            >
                                <SwiperSlide ><ProjectPortfolioCard image = {MobileImage1} /></SwiperSlide>
                                <SwiperSlide  ><ProjectPortfolioCard green  image = {MobileImage2} /></SwiperSlide>
                                <SwiperSlide ><ProjectPortfolioCard image = {MobileImage1} /></SwiperSlide>
                                <SwiperSlide  ><ProjectPortfolioCard green  image = {MobileImage2} /></SwiperSlide>
                            </Swiper>
                        </div>
                </div>
            </div>
            <div className="w-full bg-[#fff] ">
                <div className="max-w-[1200px] mx-auto py-[50px] px-[12px] md:px-[20px] ">
                    <h2 className=" text-center text-[#0A0E19] font-[600] leading-[50px] text-[26px] sm:text-[30px] md:text-[42px] max-w-[660px] mx-auto ">Have a project? Let's discuss</h2>
                    <p className=" text-[15px] text-[#0A0E19] text-center mt-[16px] ">Once you submit this form, expect to hear back from us within 24 hours.</p>
                    <div className="flex items-center gap-[12px] mt-[36px] flex-col lg:flex-row ">
                        <div className="flex items-center gap-[12px] w-full flex-col sm:flex-row ">
                            <FormLableInput lable = 'Phone *' placeholder = 'Your Name' htmlFor = 'Your Name' id = 'Your Name' type = 'text' />
                            <FormLableInput lable = 'Your Phone *' placeholder = 'Your Phone' htmlFor = 'Your Phone' id = 'Your Phone' type = 'text' />
                        </div>
                        <div className="flex items-center gap-[12px] w-full flex-col sm:flex-row ">
                            <FormLableInput lable = 'Company *' placeholder = 'Company' htmlFor = 'Company' id = 'Company' type = 'text' />
                            <FormLableInput lable = 'Email *' placeholder = 'Email' htmlFor = 'Email' id = 'Email' type = 'email' />
                        </div>
                    </div>
                    <div className="w-full mt-[26px] ">
                        <Textarea/>
                    </div>
                    <div className="flex items-center justify-center mt-[52px]  ">
                        <div className="flex items-center gap-[14px] bg-[#0D99FF] rounded-[7px] px-[22px] py-[12px] cursor-pointer">
                            <p className="text-[#fff] text-[15px] font-[500] select-none ">Submit</p>
                            <div className="bg-[#fff] rounded-[50px] p-[6px] ">
                                <RightArrow/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default CaseStudiesDetails;