import img1 from '../assets/Images/Frame.png'
import img2 from '../assets/Images/Group.png'
import img3 from '../assets/Images/Group (1).png'
import FormLableInput from '../Components/Form/LableInput';
import RightArrow from '../Components/SVGs/RightArrow';
import Textarea from '../Components/Form/Textarea';
import BlogCard from '../Components/Cards/BlogCard';
import bg from '../assets/Images/bg.png'
import bg1 from '../assets/Images/bg1.png'
import awardImg1 from '../assets/Images/image 82791.png'
import awardImg2 from '../assets/Images/image 82792.png'
import awardImg3 from '../assets/Images/image 82793.png'
import awardImg4 from '../assets/Images/image 82794.png'
import awardImg5 from '../assets/Images/image 82795.png'
import awardImg6 from '../assets/Images/image 82796.png'
import BgImage from '../assets/Images/121212.png'
import TitleImage from '../assets/Images/Vector.png'
import backgroundImage1 from '../assets/Images/r.png'
import backgroundImage2 from '../assets/Images/rr.png'
import backgroundImage3 from '../assets/Images/rrr.png'
import banner1 from '../assets/Images/image 82801.png'
import banner2 from '../assets/Images/image 82803.png'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
// Import required modules
import { Autoplay , Navigation } from 'swiper/modules';
import ClientTesrimonials from '../Components/Cards/ClientTestimonials';


import 'swiper/swiper-bundle.css'; // Ensure you have the Swiper CSS

import React, { useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';

function AboutUs() {
    return (
        <>
           <section className="w-full bg-[#062345] ">
                <div className="max-w-[900px] w-[90%] md:w-full mx-auto py-[120px] px-[15px] md:px-[20px] ">
                    <h2 className="text-[34px] sm:text-[42px] md:text-[55px] font-[600] text-[#fff] text-center ">About Us</h2>
                    <p className=" text-[14px] sm:text-[16px] md:text-[18px] text-[#fff] text-center font-[300] mt-[12px] ">Hashed System is a leading software development company in Dubai offering custom solutions. We aim to deliver innovative technology products that bring client satisfaction.</p>
                </div>
           </section>
           <main className="bg-[#fff] w-full ">
                <div className="max-w-[1200px] mx-auto py-[74px] px-[15px] md:px-[20px] ">
                    <div className="max-w-[900px] mx-auto " >
                        <h3 className="text-[#0D99FF] text-[16px] md:text-[18px] text-center font-[400] ">How we define our culture</h3>
                        <p className="text-[20px] md:text-[22px] text-[#000000] text-center mt-[11px] font-[300] ">Our culture forms the bedrock of our organization, emphasizing lifelong learning and guided by our dedication to openness, inclusivity, and uncompromising integrity. This fuels our ability to develop innovative and comprehensive digital solutions for our clients, ensuring we remain agile in a constantly evolving landscape.</p>
                    </div>
                    <div className="flex items-start justify-center mt-[62px] gap-[72px] flex-wrap ">
                        <div className="flex items-center justify-center flex-col max-w-[180px] ">
                            <h2 className="text-[#0D99FF] text-[34px] md:text-[42px] font-[600] text-center ">90+</h2>
                            <p className="text-center text-[12px] md:text-[13px] text-[#001436] line-clamp-3 ">Product solutions delivered</p>
                        </div>
                        <div className="flex items-center justify-center flex-col max-w-[180px] ">
                            <h2 className="text-[#0D99FF] text-[34px] md:text-[42px] font-[600] text-center ">12</h2>
                            <p className="text-center text-[12px] md:text-[13px] text-[#001436] line-clamp-3 ">Business Domain</p>
                        </div>
                        <div className="flex items-center justify-center flex-col max-w-[180px] ">
                            <h2 className="text-[#0D99FF] text-[34px] md:text-[42px] font-[600] text-center ">20+</h2>
                            <p className="text-center text-[12px] md:text-[13px] text-[#001436] line-clamp-3 ">Skill-gaps bridges through staff augmentation</p>
                        </div>
                        <div className="flex items-center justify-center flex-col max-w-[180px] ">
                            <h2 className="text-[#0D99FF] text-[34px] md:text-[42px] font-[600] text-center ">150+</h2>
                            <p className="text-center text-[12px] md:text-[13px] text-[#001436] line-clamp-3 ">Skilled professional</p>
                        </div>
                    </div>
                </div>
           </main>
           <div className="w-full bg-[#E8F0FA] ">
                <div className=" max-w-[1200px] mx-auto py-[36px] px-[15px] md:px-[20px] ">
                    <h2 className="mt-[46px] text-center text-[#0A0E19] font-[600] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px] ">Our Vision</h2>
                    <div className="mt-[22px] flex items-center justify-center gap-[22px] flex-wrap ">
                        <div className="bg-[#fff] max-w-[285px] w-full flex flex-col items-center justify-center px-[40px] py-[32px] rounded-[20px] ">
                            <img className='h-[95px] ' src={img1} alt="" />
                            <h2 className='text-[#0A0E19] text-center text-[18px] font-[600] mt-[16px] line-clamp-1 '>Democratize</h2>
                            <p className='text-[12px] text-[#0A0E19] text-center mt-[12px] line-clamp-4 '>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h</p>
                        </div>
                        <div className="bg-[#fff] max-w-[285px] w-full flex flex-col items-center justify-center px-[40px] py-[32px] rounded-[20px] ">
                            <img className='h-[95px] ' src={img2} alt="" />
                            <h2 className='text-[#0A0E19] text-center text-[18px] font-[600] mt-[16px] line-clamp-1 '>Strategize</h2>
                            <p className='text-[12px] text-[#0A0E19] text-center mt-[12px] line-clamp-4 '>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h</p>
                        </div>
                        <div className="bg-[#fff] max-w-[285px] w-full flex flex-col items-center justify-center px-[40px] py-[32px] rounded-[20px] ">
                            <img className='h-[95px] ' src={img3} alt="" />
                            <h2 className='text-[#0A0E19] text-center text-[18px] font-[600] mt-[16px] line-clamp-1 '>Accelerate</h2>
                            <p className='text-[12px] text-[#0A0E19] text-center mt-[12px] line-clamp-4 '>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h</p>
                        </div>
                    </div>
                </div>
           </div>
           <div className='w-full bg-[#fff] '>
                <div className='max-w-[1100px] mx-auto flex items-center pt-[50px] lg:pt-[110px] pb-[110px] px-[15px] md:px-[20px] lg:flex-row flex-col '>
                    <div className='flex-1 lg:pr-[120px] '>
                        <h2 className=' text-[#0A0E19] font-[600] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px] '>Leading the Digital Transformation in Industry </h2>
                        <p className=" text-[14px] text-[#0a0e19cd] mt-[22px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className=' flex sm:flex-1 items-center justify-end sm:max-w-max w-full relative mt-[26px] lg:mt-[0px] '>
                        <img className='h-[340px] sm:h-[390px] md:h-[430px] ' src={banner1} alt="" />
                        <img className='h-[300px] sm:h-[390px] md:h-[400px] absolute right-[24%] sm:right-[30%] top-[26%] ' src={banner2} alt="" />
                    </div>
                </div>
           </div>
           <div className='w-full bg-[#E8F0FA]  '>
                <div className='max-w-[1100px] mx-auto px-[12px] md:px-[20px] py-[50px] '>
                    <h2 className=' text-[#0A0E19] font-[600] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px] '>Our Core Values</h2>
                    <p className=" text-[14px] sm:text-[15px] text-[#0a0e19cd] mt-[11px] ">We develop and nurture every product as our own, prioritizing close collaboration with each client. From day one, we’re putting our heads together to turn your idea into a meaningful digital product. Our expert team is highly responsive and dedicated to ensuring your success, by providing an all-in approach from developing concepts to launching and supporting the product.</p>
                    <div className="flex items-center justify-center lg:items-start mt-[42px] gap-[22px]">
                            <Swiper
                                slidesPerView={3}
                                breakpoints={{
                                    
                                    100: {
                                        slidesPerView: 1,
                                        
                                    },
                                    350: {
                                        slidesPerView: 1,
                                        
                                    },
                                    700: {
                                        slidesPerView: 2,
                                        
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        
                                    },
                                    1440: {
                                        slidesPerView: 3,
                                        
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
                                <SwiperSlide className="!flex items-center justify-center" >
                                    <div className='bg-[#10335A] rounded-[20px] px-[22px] py-[22px] max-w-[320px] w-full ' >
                                        <div className='flex items-center justify-between w-full '>
                                            <p className='text-[#0D99FF] text-[14px] '>01</p>
                                            <div className='bg-[#0D99FF] rounded-[12px] h-[52px] w-[52px] '>

                                            </div>
                                        </div>
                                        <h2 className='mt-[8px] text-[#fff] font-[500] text-[32px] line-clamp-1 w-full border-b border-[#0D99FF] py-[4px] max-w-[85%] '>People first</h2>
                                        <p className='text-[13px] mt-[16px] text-[#ffffffcf] max-w-[80%] leading-6 '>Get smart with the data as we audit, consult, and implement effective data strategies for your business to gain an edge in this data-driven world. Our specialized team will help you digest the abstract data with attractive visualizations and insightful reports.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="!flex items-center justify-center" >
                                    <div className='bg-[#10335A] rounded-[20px] px-[22px] py-[22px] max-w-[320px] w-full ' >
                                    <div className='flex items-center justify-between w-full '>
                                            <p className='text-[#0D99FF] text-[14px] '>02</p>
                                            <div className='bg-[#0D99FF] rounded-[12px] h-[52px] w-[52px] '>

                                            </div>
                                        </div>
                                        <h2 className='mt-[8px] text-[#fff] font-[500] text-[32px] line-clamp-1 w-full border-b border-[#0D99FF] py-[4px] max-w-[85%] '>Passion-Driven</h2>
                                        <p className='text-[13px] mt-[16px] text-[#ffffffcf] max-w-[80%] leading-6 '>Get smart with the data as we audit, consult, and implement effective data strategies for your business to gain an edge in this data-driven world. Our specialized team will help you digest the abstract data with attractive visualizations and insightful reports.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="!flex items-center justify-center" >
                                    <div className='bg-[#10335A] rounded-[20px] px-[22px] py-[22px] max-w-[320px] w-full ' >
                                    <div className='flex items-center justify-between w-full '>
                                            <p className='text-[#0D99FF] text-[14px] '>03</p>
                                            <div className='bg-[#0D99FF] rounded-[12px] h-[52px] w-[52px] '>

                                            </div>
                                        </div>
                                        <h2 className='mt-[8px] text-[#fff] font-[500] text-[32px] line-clamp-1 w-full border-b border-[#0D99FF] py-[4px] max-w-[85%] '>Embracing challenges</h2>
                                        <p className='text-[13px] mt-[16px] text-[#ffffffcf] max-w-[80%] leading-6 '>Get smart with the data as we audit, consult, and implement effective data strategies for your business to gain an edge in this data-driven world. Our specialized team will help you digest the abstract data with attractive visualizations and insightful reports.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="!flex items-center justify-center" >
                                    <div className='bg-[#10335A] rounded-[20px] px-[22px] py-[22px] max-w-[320px] w-full ' >
                                    <div className='flex items-center justify-between w-full '>
                                            <p className='text-[#0D99FF] text-[14px] '>04</p>
                                            <div className='bg-[#0D99FF] rounded-[12px] h-[52px] w-[52px] '>

                                            </div>
                                        </div>
                                        <h2 className='mt-[8px] text-[#fff] font-[500] text-[32px] line-clamp-1 w-full border-b border-[#0D99FF] py-[4px] max-w-[85%] '>Dream Big, Act Fast</h2>
                                        <p className='text-[13px] mt-[16px] text-[#ffffffcf] max-w-[80%] leading-6 '>Get smart with the data as we audit, consult, and implement effective data strategies for your business to gain an edge in this data-driven world. Our specialized team will help you digest the abstract data with attractive visualizations and insightful reports.</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            
                        </div>
                </div>
           </div>
           <div className='w-full bg-[#fff] ' >
                <div className='max-w-[1100px] mx-auto py-[42px] px-[12px] md:px-[20px] '>
                <div className="max-w-[1100px] mx-auto mt-[50px] md:mt-[110px] ">
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
                <div className='max-w-[1100px] mx-auto mt-[20px] md:mt-[72px] px-[12px] sm:px-[20px] '>
                    <h2 className=' text-[#0A0E19] font-[600] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px] '>Challenging proven cultures</h2>
                    <p className='mt-[60px] text-[13px] text-[#0A0E19] '>We don’t entertain barricades in communication and every conversation flows endlessly through the floor</p>
                    <div className='mt-[22px] flex items-center gap-[22px] md:flex-row flex-col '>
                        <div className="flex flex-col gap-[22px] flex-1 ">
                            <div className="h-[270px] sm:h-[300px] bg-cover bg-no-repeat bg-center rounded-[20px] " src="" alt="" style={{backgroundImage : `url(${backgroundImage1})`}}  ></div>
                            <div className="flex-1 ">
                                <h2 className="text-[22px] text-[#001436] font-[600] ">Exceptional Work</h2>
                                <p className="text-[12px] text-[#001436] mt-[6px] line-clamp-4 ">Striving to do the highest level of work as we feel a true sense of accomplishment with our commitment to delivering exceptional work that makes a real difference.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[22px] flex-1">
                            <div className="h-[270px] sm:h-[300px] bg-cover bg-no-repeat bg-center rounded-[20px] " src="" alt="" style={{backgroundImage : `url(${backgroundImage2})`}}  ></div>
                            <div className="flex-1 ">
                                <h2 className="text-[22px] text-[#001436] font-[600] ">Exceptional Work</h2>
                                <p className="text-[12px] text-[#001436] mt-[6px] line-clamp-4 ">Striving to do the highest level of work as we feel a true sense of accomplishment with our commitment to delivering exceptional work that makes a real difference.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[90px] flex items-center gap-[22px] md:flex-row flex-col '>
                        <div className="flex flex-col gap-[22px] flex-1 ">
                            <div className="h-[270px] sm:h-[300px] bg-cover bg-no-repeat bg-center rounded-[20px] " src="" alt="" style={{backgroundImage : `url(${backgroundImage1})`}}  ></div>
                            <div className="flex-1 ">
                                <h2 className="text-[22px] text-[#001436] font-[600] ">Exceptional Work</h2>
                                <p className="text-[12px] text-[#001436] mt-[6px] line-clamp-4 ">Striving to do the highest level of work as we feel a true sense of accomplishment with our commitment to delivering exceptional work that makes a real difference.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[22px] flex-1">
                            <div className="h-[270px] sm:h-[300px] bg-cover bg-no-repeat bg-center rounded-[20px] " src="" alt="" style={{backgroundImage : `url(${backgroundImage2})`}}  ></div>
                            <div className="flex-1 ">
                                <h2 className="text-[22px] text-[#001436] font-[600] ">Exceptional Work</h2>
                                <p className="text-[12px] text-[#001436] mt-[6px] line-clamp-4 ">Striving to do the highest level of work as we feel a true sense of accomplishment with our commitment to delivering exceptional work that makes a real difference.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[22px] flex-1">
                            <div className="h-[270px] sm:h-[300px] bg-cover bg-no-repeat bg-center rounded-[20px] " src="" alt="" style={{backgroundImage : `url(${backgroundImage2})`}}  ></div>
                            <div className="flex-1 ">
                                <h2 className="text-[22px] text-[#001436] font-[600] ">Exceptional Work</h2>
                                <p className="text-[12px] text-[#001436] mt-[6px] line-clamp-4 ">Striving to do the highest level of work as we feel a true sense of accomplishment with our commitment to delivering exceptional work that makes a real difference.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[26px] md:mt-[90px] w-full '>
                        <div className="flex items-center justify-center gap-[22px] w-full md:max-w-[800px] mt-[22px] flex-col md:flex-row">
                            <div className="md:max-w-[420px] w-full h-[230px] sm:h-[250px] bg-cover bg-no-repeat bg-center rounded-[20px] " src="" alt="" style={{backgroundImage : `url(${backgroundImage3})`}}  ></div>
                            <div className="w-full md:flex-1 ">
                                <h2 className="text-[22px] text-[#001436] font-[600] ">Data Analytics</h2>
                                <p className="text-[12px] text-[#001436] mt-[6px] max-w-[400px] line-clamp-4 ">We prioritize offering holistic digital solutions tailored to client's needs, with complete transparency throughout the project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1100px] mx-auto py-[32px] px-[12px] md:px-[20px] '>
                    <div className='mt-[32px] flex items-center justify-between gap-[22px] sm:flex-row flex-col '>
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
           </div>
           <div className="w-full bg-[#E8F0FA] ">
                <div className="max-w-[1100px] mx-auto py-[52px] px-[15px] sm:px-[20px] ">
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
  
  export default AboutUs;