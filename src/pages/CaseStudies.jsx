import ServiceSmallCard from '../Components/Cards/ServiceSmallCard';
import sectionImage from '../assets/Images/section.png'
import sectionMobile from '../assets/Images/sectionMobile.png'
import img1 from '../assets/Images/1.png'
import img2 from '../assets/Images/2.png'
import img3 from '../assets/Images/3.png'
import img4 from '../assets/Images/4.png'
import img5 from '../assets/Images/5.png'
import img6 from '../assets/Images/6.png'
import img7 from '../assets/Images/7.png'
import projectCardImage3 from '../assets/Images/image 82790.png'
import BgImage from '../assets/Images/121212.png'
import TitleImage from '../assets/Images/Vector.png'
import projectCardImage4 from '../assets/Images/image 82789.png'
import BlogCard from '../Components/Cards/BlogCard';
import bg from '../assets/Images/bg.png'
import bg1 from '../assets/Images/bg1.png'
import awardImg1 from '../assets/Images/image 82791.png'
import awardImg2 from '../assets/Images/image 82792.png'
import awardImg3 from '../assets/Images/image 82793.png'
import awardImg4 from '../assets/Images/image 82794.png'
import awardImg5 from '../assets/Images/image 82795.png'
import awardImg6 from '../assets/Images/image 82796.png'







// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
// Import required modules
import { Autoplay , Navigation } from 'swiper/modules';
import ProjectSingleCard from '../Components/Cards/ProjectSingleCard';
import ClientTesrimonials from '../Components/Cards/ClientTestimonials';

import 'swiper/swiper-bundle.css'; // Ensure you have the Swiper CSS

import React, { useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';
import FormLableInput from '../Components/Form/LableInput';
import RightArrow from '../Components/SVGs/RightArrow';
import Textarea from '../Components/Form/Textarea';
import RightArrowWhite from '../Components/SVGs/RightArrowWhite';




function CaseStudies() {
    return (
        <>
            <section className=" w-full bg-no-repeat bg-cover bg-center bg-[#19395f]  " style={{backgroundImage : `url(${sectionImage})`}}>
                <div className='max-w-[1200px] mx-auto px-[15px] md:px-[20px] pt-[52px] '>
                    <h3 className='text-[19px] md:text-[22px] font-[600] text-center text-[#0D99FF] '>Explore our ventures</h3>
                    <h2 className=' text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] mt-[10px] text-[#fff] font-[600] text-center '>Quick, Reliable and Affordable Services</h2>
                    <div className='flex items-center justify-between gap-[22px] mt-[32px] lg:flex-row flex-col '>
                        <div>
                            <div className='w-[170px] '>
                                <div className='py-[7px] text-[#ffffffbf] hover:text-[#fff] text-[18px] font-[600] relative group transition-all cursor-pointer '>
                                    OneMove
                                    <div className='w-[0px] group-hover:w-full transition-all absolute bottom-0 h-[3px] rounded-[30px] bg-[#007AFE] '>

                                    </div>
                                </div>
                                <div className='py-[7px] text-[#ffffffbf] hover:text-[#fff] text-[18px] font-[600] relative group transition-all cursor-pointer '>
                                    Endup
                                    <div className='w-[0px] group-hover:w-full transition-all absolute bottom-0 h-[3px] rounded-[30px] bg-[#007AFE] '>

                                    </div>
                                </div>
                                <div className='py-[7px] text-[#ffffffbf] hover:text-[#fff] text-[18px] font-[600] relative group transition-all cursor-pointer '>
                                    N Style
                                    <div className='w-[0px] group-hover:w-full transition-all absolute bottom-0 h-[3px] rounded-[30px] bg-[#007AFE] '>

                                    </div>
                                </div>
                                <div className='py-[7px] text-[#ffffffbf] hover:text-[#fff] text-[18px] font-[600] relative group transition-all cursor-pointer '>
                                    Concierge Bookings
                                    <div className='w-[0px] group-hover:w-full transition-all absolute bottom-0 h-[3px] rounded-[30px] bg-[#007AFE] '>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={sectionMobile} alt="" />
                    </div>
                </div>
            </section>
            <main className=' w-full bg-[#fff]  '>
                <div className='max-w-[1200px] mx-auto px-[15px] md:px-[20px] pt-[82px] pb-[52px] ' >
                    <h2 className="text-center text-[#0A0E19] font-[600] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">Technology</h2>
                    <div className=" w-full flex items-center overflow-auto py-[22px] gap-[12px] mt-[15px]">
                            <Swiper
                                slidesPerView={10}
                                breakpoints={{
                                    
                                    100: {
                                      slidesPerView: 7,
                                      
                                    },
                                    1024: {
                                      slidesPerView: 8,
                                      
                                    },
                                    1440: {
                                      slidesPerView: 10,
                                      
                                    },
                                  }}
                                spaceBetween={10}
                                centeredSlides={true}
                                autoplay={{
                                delay: 1900,
                                disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[ Autoplay]}
                                className="mySwiper w-full"
                            >
                                <SwiperSlide className="max-w-max min-w-fit " ><ServiceSmallCard heading = 'Data Analytics' /></SwiperSlide>
                                <SwiperSlide className="max-w-max min-w-fit " ><ServiceSmallCard heading = 'UI/UX' /></SwiperSlide>
                                <SwiperSlide className="max-w-max min-w-fit " ><ServiceSmallCard heading = 'Artificial Intelligence' /></SwiperSlide>
                                <SwiperSlide className="max-w-max min-w-fit " ><ServiceSmallCard heading = 'Machine Learning' /></SwiperSlide>
                                <SwiperSlide className="max-w-max min-w-fit " ><ServiceSmallCard heading = 'Web' /></SwiperSlide>
                                <SwiperSlide className="max-w-max min-w-fit " ><ServiceSmallCard heading = 'Mobile' /></SwiperSlide>
                                <SwiperSlide className="max-w-max min-w-fit " ><ServiceSmallCard heading = 'Data Analytics' /></SwiperSlide>
                                <SwiperSlide className="max-w-max min-w-fit " ><ServiceSmallCard heading = 'UI/UX' /></SwiperSlide>
                                <SwiperSlide className="max-w-max min-w-fit " ><ServiceSmallCard heading = 'Artificial Intelligence' /></SwiperSlide>
                                <SwiperSlide className="max-w-max min-w-fit " ><ServiceSmallCard heading = 'Machine Learning' /></SwiperSlide>
                                <SwiperSlide className="max-w-max min-w-fit " ><ServiceSmallCard heading = 'Web' /></SwiperSlide>
                                <SwiperSlide className="max-w-max min-w-fit " ><ServiceSmallCard heading = 'Mobile' /></SwiperSlide>
                            </Swiper>
                        </div>
                    <div className="mt-[22px] flex items-center justify-center flex-wrap gap-[12px] ">
                        <img className="h-[56px] w-[110px] " src={img1} alt="" />
                        <img className="h-[56px] w-[110px] " src={img2} alt="" />
                        <img className="h-[56px] w-[110px] " src={img3} alt="" />
                        <img className="h-[56px] w-[110px] " src={img4} alt="" />
                        <img className="h-[56px] w-[110px] " src={img5} alt="" />
                        <img className="h-[56px] w-[110px] " src={img6} alt="" />
                        <img className="h-[56px] w-[110px] " src={img7} alt="" />
                        <img className="h-[56px] w-[110px] " src={img1} alt="" />
                        <img className="h-[56px] w-[110px] " src={img2} alt="" />
                        <img className="h-[56px] w-[110px] " src={img3} alt="" />
                        <img className="h-[56px] w-[110px] " src={img4} alt="" />
                        <img className="h-[56px] w-[110px] " src={img5} alt="" />
                        <img className="h-[56px] w-[110px] " src={img6} alt="" />
                        <img className="h-[56px] w-[110px] " src={img7} alt="" />
                    </div>
                    <div className=" flex items-center justify-center gap-[8px] mt-[32px] ">
                        <button className="swiper-button-prev-Technology flex items-center justify-center h-[42px] w-[46px] cursor-pointer bg-[#fff] rounded-[12px] border border-[#0D99FF] ">
                            <svg width="18" height="15" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM21 7H1V9H21V7Z" fill="#0D99FF"/>
                            </svg>  
                        </button>
                        <button className="swiper-button-next-Technology flex items-center justify-center h-[42px] w-[46px] cursor-pointer bg-[#0D99FF] rounded-[12px] border border-[#0D99FF] ">
                            <svg width="18" height="15" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L14.3431 15.0711C13.9526 15.4616 13.3195 15.4616 12.9289 15.0711C12.5384 14.6805 12.5384 14.0474 12.9289 13.6569L18.5858 8L12.9289 2.34315C12.5384 1.95262 12.5384 1.31946 12.9289 0.928932C13.3195 0.538408 13.9526 0.538408 14.3431 0.928932L20.7071 7.29289ZM0 7H20V9H0V7Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <div className='mt-[72px] '>
                        <h2 className=" text-[#0A0E19] font-[600] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">Explore Our Proven Success in Product Excellence</h2>
                        <p className=" text-[14px] sm:text-[15px] text-[#0A0E19] mt-[22px] ">We bring new possibilities for businesses through our product engineeringsolutions. Dive into our portfolio, a testament to our product innovation and its transformative impact on your business.</p>
                        <div className='flex gap-[22px] flex-wrap mt-[52px] justify-center '>
                            <ProjectSingleCard color = '#8ec39f' image = {projectCardImage3} heading = 'Endup' paddingLeft = '20px' paddingRight = '20px' />
                            <ProjectSingleCard color = '#b1d1f3' image = {projectCardImage4} heading = 'OneMove' />
                        </div>
                    </div>
                    <div className=' mt-[72px] '>
                        <div className='flex items-center justify-between gap-[22px] sm:flex-row flex-col '>
                            <h2 className=' text-[#0A0E19] font-[600] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px] '>Client Testimonials</h2>
                            <div className=" flex items-center justify-center gap-[8px] ">
                                <button className="swiper-button-prev-blog1 flex items-center justify-center h-[42px] w-[46px] cursor-pointer bg-[#fff] rounded-[12px] border border-[#0D99FF] ">
                                    <svg width="18" height="15" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM21 7H1V9H21V7Z" fill="#0D99FF"/>
                                    </svg>  
                                </button>
                                <button className="swiper-button-next-blog1 flex items-center justify-center h-[42px] w-[46px] cursor-pointer bg-[#0D99FF] rounded-[12px] border border-[#0D99FF] ">
                                    <svg width="18" height="15" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L14.3431 15.0711C13.9526 15.4616 13.3195 15.4616 12.9289 15.0711C12.5384 14.6805 12.5384 14.0474 12.9289 13.6569L18.5858 8L12.9289 2.34315C12.5384 1.95262 12.5384 1.31946 12.9289 0.928932C13.3195 0.538408 13.9526 0.538408 14.3431 0.928932L20.7071 7.29289ZM0 7H20V9H0V7Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='pt-[30px] '>
                            <Swiper
                                spaceBetween={12}
                                navigation={{
                                    nextEl: '.swiper-button-next-blog1',
                                    prevEl: '.swiper-button-prev-blog1',
                                }}
                                autoplay={{
                                    delay: 1900,
                                    disableOnInteraction: false,
                                    }}
                                pagination={true} modules={[Pagination , Autoplay , Navigation ]}
                                
                                className="mySwiper !pb-[80px] ">
                                    <SwiperSlide><ClientTesrimonials bgImage = {BgImage} titleImage = {TitleImage} /></SwiperSlide>
                                    <SwiperSlide><ClientTesrimonials bgImage = {BgImage} titleImage = {TitleImage} /></SwiperSlide>
                                    <SwiperSlide><ClientTesrimonials bgImage = {BgImage} titleImage = {TitleImage} /></SwiperSlide>
                                    <SwiperSlide><ClientTesrimonials bgImage = {BgImage} titleImage = {TitleImage} /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className='flex gap-[22px] flex-wrap mt-[52px] justify-center '>
                        <ProjectSingleCard color = '#8ec39f' image = {projectCardImage3} heading = 'Endup' paddingLeft = '20px' paddingRight = '20px' />
                        <ProjectSingleCard color = '#b1d1f3' image = {projectCardImage4} heading = 'OneMove' />
                    </div>
                    <div className=' mt-[62px] '>
                        <div>
                            <div className='w-full flex bg-[#C6E8D1] items-center pt-[32px] px-[42px] justify-between gap-[22px] rounded-[20px] mt-[18px] flex-col md:flex-row '>
                                <div className='flex-1'>
                                    <h2 className=' text-[#0A0E19] text-[19px] md:text-[22px] font-[600] '>endup</h2>
                                    <p className='text-[#0A0E19] text-[12px] md:text-[13px] mt-[6px] '>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum</p>
                                    <div className='mt-[22px] flex max-w-max items-center gap-[12px] px-[15px] md:px-[20px] py-[8px] md:py-[9px] cursor-pointer rounded-[7px] border border-[#0D99FF] text-[#0D99FF] bg-[#fff] text-[13px] md:text-[14px] font-[600] '>
                                        View Case Study
                                        <div className='flex items-center justify-center h-[26px] md:h-[30px] w-[26px] md:w-[30px] bg-[#0D99FF] rounded-[50px] '>
                                            <RightArrowWhite/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-1 flex items-center justify-end md:mt-[0px] mt-[22px] '>
                                    <img src={projectCardImage3} alt="" />
                                </div>
                            </div>
                            <div className='w-full flex bg-[#D5E7FB] items-center pt-[32px] px-[42px] justify-between gap-[22px] rounded-[20px] mt-[18px] flex-col md:flex-row-reverse '>
                                <div className='flex-1 '>
                                    <h2 className=' text-[#0A0E19] text-[19px] md:text-[22px] font-[600] '>endup</h2>
                                    <p className='text-[#0A0E19] text-[12px] md:text-[13px] mt-[6px] '>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum</p>
                                    <div className='mt-[22px] flex max-w-max items-center gap-[12px] px-[15px] md:px-[20px] py-[8px] md:py-[9px] cursor-pointer rounded-[7px] border border-[#0D99FF] text-[#0D99FF] bg-[#fff] text-[13px] md:text-[14px] font-[600] '>
                                        View Case Study
                                        <div className='flex items-center justify-center h-[26px] md:h-[30px] w-[26px] md:w-[30px] bg-[#0D99FF] rounded-[50px] '>
                                            <RightArrowWhite/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-1 flex items-center justify-start md:mt-[0px] mt-[22px] '>
                                    <img src={projectCardImage3} alt="" />
                                </div>
                            </div>
                            <div className='w-full flex bg-[#EAE1CA] items-center pt-[32px] px-[42px] justify-between gap-[22px] rounded-[20px] mt-[18px] flex-col md:flex-row '>
                                <div className='flex-1'>
                                    <h2 className=' text-[#0A0E19] text-[19px] md:text-[22px] font-[600] '>endup</h2>
                                    <p className='text-[#0A0E19] text-[12px] md:text-[13px] mt-[6px] '>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum</p>
                                    <div className='mt-[22px] flex max-w-max items-center gap-[12px] px-[15px] md:px-[20px] py-[8px] md:py-[9px] cursor-pointer rounded-[7px] border border-[#0D99FF] text-[#0D99FF] bg-[#fff] text-[13px] md:text-[14px] font-[600] '>
                                        View Case Study
                                        <div className='flex items-center justify-center h-[26px] md:h-[30px] w-[26px] md:w-[30px] bg-[#0D99FF] rounded-[50px] '>
                                            <RightArrowWhite/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-1 flex items-center justify-end md:mt-[0px] mt-[22px] '>
                                    <img src={projectCardImage3} alt="" />
                                </div>
                            </div>
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
            </main>
            <div className="max-w-[1200px] mx-auto mt-[50px] py-[50px] px-[15px] md:px-[20px] ">
                <h2 className="text-center text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">Awards & Recognitions</h2>
                <div className="flex items-center justify-center gap-[18px] mt-[30px] flex-wrap ">
                    <Swiper
                        slidesPerView={8}
                        navigation={{
                            nextEl: '.swiper-button-next-Awards',
                            prevEl: '.swiper-button-prev-Awards',
                            }}
                        breakpoints={{
                            
                            100: {
                                slidesPerView: 5,
                                
                            },
                            700: {
                                slidesPerView: 6,
                                
                            },
                            1024: {
                                slidesPerView: 8,
                                
                            },
                            1440: {
                                slidesPerView: 9,
                                
                            },
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
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg1} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg2} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg3} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg4} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg4} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg4} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg4} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg4} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg4} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg4} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg4} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg4} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg5} alt="" /></SwiperSlide>
                        <SwiperSlide className="max-w-max min-w-fit " ><img className="h-[100px] sm:h-[110px] lg:h-[126px] mr-[12px] " src={awardImg6} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className=" flex items-center justify-center gap-[8px] mt-[32px] ">
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
            <div className="w-full bg-[#E8F0FA] ">
                <div className="max-w-[1200px] mx-auto py-[52px] px-[15px] sm:px-[20px] ">
                    <div className="flex items-center justify-center ">
                        <div className="rounded-[12px] bg-[#E1ECFF] flex items-center gap-[4px] py-[5px] px-[12px] ">
                            <span className="bg-[#0D99FF] rounded-[50px] h-[7px] w-[7px] ">

                            </span>
                            <p className="text-[12px] text-[#180F34] ">Blog</p>
                        </div>
                    </div>
                    <h2 className="text-center text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">We aim to ensure that knowledge and news are readily accessible to all</h2>
                    <div className="flex items-center lg:items-start mt-[22px] gap-[22px] justify-center">
                        <Swiper
                            slidesPerView={3}
                            navigation={{
                                nextEl: '.swiper-button-next-blog',
                                prevEl: '.swiper-button-prev-blog',
                              }}
                            breakpoints={{
                                
                                100: {
                                    slidesPerView: 1,
                                    spaceBetween:10,
                                    
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween:30
                                    
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween:50
                                    
                                },
                                }}
                            autoplay={{
                            delay: 1900,
                            disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[ Autoplay , Navigation]}
                            className="mySwiper w-full"
                        >
                            <SwiperSlide className="" ><BlogCard bg = {bg1} date = '21 May 2024' heading = 'What is agile software development?' peragraph = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' /></SwiperSlide>
                            <SwiperSlide className=" " ><BlogCard bg = {bg} date = '28 May 2024' heading = 'How to Assess a Mobile Application’s Value?' peragraph = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' /></SwiperSlide>
                            <SwiperSlide className=" " ><BlogCard bg = {bg1} date = '21 May 2024' heading = 'What is agile software development?' peragraph = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' /></SwiperSlide>
                            <SwiperSlide className=" " ><BlogCard bg = {bg} date = '28 May 2024' heading = 'How to Assess a Mobile Application’s Value?' peragraph = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' /></SwiperSlide>
                        </Swiper>
                        
                    </div>
                    <div className=" flex items-center justify-center gap-[8px] mt-[32px] ">
                        <button className="swiper-button-prev-blog flex items-center justify-center h-[42px] w-[46px] cursor-pointer bg-[#fff] rounded-[12px] border border-[#0D99FF] ">
                            <svg width="18" height="15" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM21 7H1V9H21V7Z" fill="#0D99FF"/>
                            </svg>  
                        </button>
                        <button className="swiper-button-next-blog flex items-center justify-center h-[42px] w-[46px] cursor-pointer bg-[#0D99FF] rounded-[12px] border border-[#0D99FF] ">
                            <svg width="18" height="15" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L14.3431 15.0711C13.9526 15.4616 13.3195 15.4616 12.9289 15.0711C12.5384 14.6805 12.5384 14.0474 12.9289 13.6569L18.5858 8L12.9289 2.34315C12.5384 1.95262 12.5384 1.31946 12.9289 0.928932C13.3195 0.538408 13.9526 0.538408 14.3431 0.928932L20.7071 7.29289ZM0 7H20V9H0V7Z" fill="white"/>
                            </svg>
                        </button>
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
  
  export default CaseStudies;