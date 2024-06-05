import BlogCard from "../Components/Cards/BlogCard";
import FormLableInput from "../Components/Form/LableInput";
import Textarea from "../Components/Form/Textarea";
import RightArrow from "../Components/SVGs/RightArrow";
import bg from '../assets/Images/bg.png'
import bg1 from '../assets/Images/bg1.png'
import image1 from '../assets/Images/image 82786.png'
import image2 from '../assets/Images/laravel-logo 1.png'
import image3 from '../assets/Images/product 1.png'
import image4 from '../assets/Images/image 82787.png'
import img8 from '../assets/Images/image 82785 1.png'
import BgImage from '../assets/Images/121212.png'
import TitleImage from '../assets/Images/Vector.png'
import projectCardImage3 from '../assets/Images/image 82790.png'
import projectCardImage4 from '../assets/Images/image 82789.png'
import img1 from '../assets/Images/1.png'
import img2 from '../assets/Images/2.png'
import img3 from '../assets/Images/3.png'
import img4 from '../assets/Images/4.png'
import img5 from '../assets/Images/5.png'
import img6 from '../assets/Images/6.png'
import img7 from '../assets/Images/7.png'
import python from '../assets/Images/image 82785 1.png'
import position1 from '../assets/Images/Polygon 1.png'
import position2 from '../assets/Images/Polygon 2.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
// Import required modules
import { Autoplay , Navigation } from 'swiper/modules';
import ServiceSingleCard from "../Components/Cards/ServiceSingleCard";
import ClientTesrimonials from "../Components/Cards/ClientTestimonials";

import 'swiper/swiper-bundle.css'; // Ensure you have the Swiper CSS

import { Pagination } from 'swiper/modules';
import ProjectSingleCard from "../Components/Cards/ProjectSingleCard";




function ServiceDetails() {
    return (
        <>
            <div className="w-full bg-[#fff] relative ">
                <div className="max-w-[1200px] mx-auto px-[15px] md:px-[20px] flex items-start justify-between py-[52px] gap-[32px] sm:gap-[60px] !z-50 sm:flex-row flex-col-reverse ">
                    <div className="">
                        <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] text-[#001436] font-[600] text-start leading-[43px] sm:leading-[48px] md:leading-[60px] lg:leading-[70px] line-clamp-5 ">Achieve measurable & sustainable business outcomes with Django - Python Application</h2>
                        <p className=" text-[14px] sm:text-[15px] text-[#0A0E19] mt-[16px] ">Leverage data analytics solutions to get actionable insights and make informed decisions to drive your business forward with tangible results.</p>
                        <div className="flex items-center mt-[22px]  ">
                            <div className="flex items-center gap-[14px] bg-[#0D99FF] rounded-[7px] px-[22px] py-[12px] cursor-pointer">
                                <p className="text-[#fff] text-[15px] font-[500] select-none ">Contact Now</p>
                                <div className="bg-[#fff] rounded-[50px] p-[6px] ">
                                    <RightArrow/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="h-[140px]" src={python} alt="" />
                </div>
                <div className=" absolute !z-0 right-0 top-0 flex items-end flex-col ">
                    <img className="h-[250px] sm:h-[280px] md:h-[320px] lg:h-[360px] " src={position1} alt="" />
                    <img className="h-[250px] sm:h-[280px] md:h-[320px] lg:h-[360px] " src={position2} alt="" />
                </div>
                <div className="max-w-[1200px] mx-auto px-[15px] md:px-[20px] pt-[22px] !z-50 ">
                    <p className="text-[20px] text-[#000000] font-[500] ">Our Trusted Clients</p>
                    <div className="flex items-center gap-[16px] flex-wrap mt-[22px] ">
                        <img className="h-[56px] w-[110px] !z-50 " src={img1} alt="" />
                        <img className="h-[56px] w-[110px] !z-50 " src={img2} alt="" />
                        <img className="h-[56px] w-[110px] !z-50 " src={img3} alt="" />
                        <img className="h-[56px] w-[110px] !z-50 " src={img4} alt="" />
                        <img className="h-[56px] w-[110px] !z-50 " src={img5} alt="" />
                        <img className="h-[56px] w-[110px] !z-50 " src={img6} alt="" />
                        <img className="h-[56px] w-[110px] !z-50 " src={img7} alt="" />
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto px-[15px] md:px-[20px] py-[52px] ">
                    <h2 className=" text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">Unleashing the Power of AI with Our Capabilities for Advanced Analytics</h2>
                    <div className="flex items-center justify-center gap-[22px] flex-wrap mt-[40px] ">
                        <div className='bg-[#E8F0FA] rounded-[20px] px-[22px] py-[22px] max-w-[320px] w-full ' >
                            <div className='flex items-center justify-between w-full '>
                                <p className='text-[#0D99FF] text-[14px] '>01</p>
                                <div className='bg-[#0D99FF] rounded-[12px] h-[52px] w-[52px] '>

                                </div>
                            </div>
                            <h2 className='mt-[8px] text-[#0A0E19] font-[500] text-[32px] line-clamp-1 w-full border-b border-[#0D99FF] py-[4px] max-w-[85%] '>People first</h2>
                            <p className='text-[13px] mt-[16px] text-[#001436] max-w-[80%] leading-6 '>Get smart with the data as we audit, consult, and implement effective data strategies for your business to gain an edge in this data-driven world. Our specialized team will help you digest the abstract data with attractive visualizations and insightful reports.</p>
                        </div>
                        <div className='bg-[#E8F0FA] rounded-[20px] px-[22px] py-[22px] max-w-[320px] w-full ' >
                            <div className='flex items-center justify-between w-full '>
                                <p className='text-[#0D99FF] text-[14px] '>01</p>
                                <div className='bg-[#0D99FF] rounded-[12px] h-[52px] w-[52px] '>

                                </div>
                            </div>
                            <h2 className='mt-[8px] text-[#0A0E19] font-[500] text-[32px] line-clamp-1 w-full border-b border-[#0D99FF] py-[4px] max-w-[85%] '>People first</h2>
                            <p className='text-[13px] mt-[16px] text-[#001436] max-w-[80%] leading-6 '>Get smart with the data as we audit, consult, and implement effective data strategies for your business to gain an edge in this data-driven world. Our specialized team will help you digest the abstract data with attractive visualizations and insightful reports.</p>
                        </div>
                        <div className='bg-[#E8F0FA] rounded-[20px] px-[22px] py-[22px] max-w-[320px] w-full ' >
                            <div className='flex items-center justify-between w-full '>
                                <p className='text-[#0D99FF] text-[14px] '>01</p>
                                <div className='bg-[#0D99FF] rounded-[12px] h-[52px] w-[52px] '>

                                </div>
                            </div>
                            <h2 className='mt-[8px] text-[#0A0E19] font-[500] text-[32px] line-clamp-1 w-full border-b border-[#0D99FF] py-[4px] max-w-[85%] '>People first</h2>
                            <p className='text-[13px] mt-[16px] text-[#001436] max-w-[80%] leading-6 '>Get smart with the data as we audit, consult, and implement effective data strategies for your business to gain an edge in this data-driven world. Our specialized team will help you digest the abstract data with attractive visualizations and insightful reports.</p>
                        </div>
                        <div className='bg-[#E8F0FA] rounded-[20px] px-[22px] py-[22px] max-w-[320px] w-full ' >
                            <div className='flex items-center justify-between w-full '>
                                <p className='text-[#0D99FF] text-[14px] '>01</p>
                                <div className='bg-[#0D99FF] rounded-[12px] h-[52px] w-[52px] '>

                                </div>
                            </div>
                            <h2 className='mt-[8px] text-[#0A0E19] font-[500] text-[32px] line-clamp-1 w-full border-b border-[#0D99FF] py-[4px] max-w-[85%] '>People first</h2>
                            <p className='text-[13px] mt-[16px] text-[#001436] max-w-[80%] leading-6 '>Get smart with the data as we audit, consult, and implement effective data strategies for your business to gain an edge in this data-driven world. Our specialized team will help you digest the abstract data with attractive visualizations and insightful reports.</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1200px] mx-auto py-[32px] px-[12px] md:px-[20px] '>
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
                <div className="max-w-[1200px] mx-auto px-[15px] md:px-[20px] pt-[32px] pb-[60px] ">
                    <h2 className=" text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">We’re Proud to Share Our Accomplishments With You</h2>
                    <p className=" text-[14px] sm:text-[15px] text-[#0A0E19] mt-[22px] ">A glimpse into our dynamic creation wherein we completed numerous successful projects, with each being a testament to our ability to create innovative and impactful solutions.</p>
                    <div className="flex items-center flex-wrap mt-[24px] md:mt-[50px] gap-[22px] justify-center ">
                        <ProjectSingleCard color = '#8ec39f' image = {projectCardImage3} heading = 'Endup' paddingLeft = '20px' paddingRight = '20px' />
                        <ProjectSingleCard color = '#b1d1f3' image = {projectCardImage4} heading = 'OneMove' />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#E8F0FA] ">
                <div className="max-w-[1200px] mx-auto px-[15px] md:px-[20px] py-[50px] ">
                    <h2 className=" text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">How will Rootquotient align with your goal?</h2>
                    <p className=" text-[14px] sm:text-[15px] text-[#0A0E19] mt-[16px] ">Receive expert, actionable data-driven solutions to align with your business objectives as our experienced professionals utilize technologies to perform in-depth analyses of your data, presenting findings through clear and easy-to-understand visualizations.</p>
                    <div className="mt-[32px] flex items-center justify-center gap-[22px] flex-wrap ">
                        <div className='bg-[#10335A] rounded-[20px] px-[22px] pb-[52px] pt-[72px] w-[320px] ' >
                                <div className='bg-[#0D99FF] rounded-[12px] h-[52px] w-[52px] '>

                                </div>
                            <h2 className='mt-[8px] text-[#fff] font-[500] text-[32px] line-clamp-2 w-full py-[4px] leading-[42px] '>High-Quality Deliverables</h2>
                            <p className='text-[13px] text-[#ffffffcf] leading-6 '>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an known printer took a galley</p>
                        </div>
                        <div className='bg-[#10335A] rounded-[20px] px-[22px] pb-[52px] pt-[72px] w-[320px] ' >
                                <div className='bg-[#0D99FF] rounded-[12px] h-[52px] w-[52px] '>

                                </div>
                            <h2 className='mt-[8px] text-[#fff] font-[500] text-[32px] line-clamp-2 w-full py-[4px] leading-[42px] '>High-Quality Deliverables</h2>
                            <p className='text-[13px] text-[#ffffffcf] leading-6 '>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an known printer took a galley</p>
                        </div>
                        <div className='bg-[#10335A] rounded-[20px] px-[22px] pb-[52px] pt-[72px] w-[320px] ' >
                                <div className='bg-[#0D99FF] rounded-[12px] h-[52px] w-[52px] '>

                                </div>
                            <h2 className='mt-[8px] text-[#fff] font-[500] text-[32px] line-clamp-2 w-full py-[4px] leading-[42px] '>High-Quality Deliverables</h2>
                            <p className='text-[13px] text-[#ffffffcf] leading-6 '>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an known printer took a galley</p>
                        </div>
                        <div className='bg-[#10335A] rounded-[20px] px-[22px] pb-[52px] pt-[72px] w-[320px] ' >
                                <div className='bg-[#0D99FF] rounded-[12px] h-[52px] w-[52px] '>

                                </div>
                            <h2 className='mt-[8px] text-[#fff] font-[500] text-[32px] line-clamp-2 w-full py-[4px] leading-[42px] '>High-Quality Deliverables</h2>
                            <p className='text-[13px] text-[#ffffffcf] leading-6 '>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an known printer took a galley</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#fff] w-full ">
                <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[20px] py-[42px] ">
                    <h2 className=" text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">How we address the projects for optimal output</h2>
                    <p className=" text-[14px] sm:text-[15px] text-[#0A0E19] mt-[16px] ">We use meticulously crafted procedures to focus on efficiency, fitting, and adaptability.</p>
                    <ServiceSingleCard image = {img8} title = 'Django - Python Application' peragraph = 'Build seamless mobile apps with Flutter. Its layered architecture enables flexible designs and high-speed rendering, allowing us to focus on optimized ' />
                    <ServiceSingleCard image = {image1} title = 'Mobile Application (Flutter)' peragraph = 'Develop custom web applications with Laravel clean, expressive code. As a PHP framework, it enables the rapid development of robust web apps.' />
                    <ServiceSingleCard image = {image2} title = 'Laravel - PHP Application' peragraph = 'Build stunning websites and apps with WordPress, the leading open-source CMS. Its elegant architecture makes it our go-to for crafting customized.' />
                    <ServiceSingleCard image = {image3} title = 'Product Development' peragraph = 'Bring your product vision to life with our expert team. We develop innovative software products using the latest technologies to meet your requirements.' />
                    <ServiceSingleCard image = {image4} title = 'WordPress Development' peragraph = 'Bring your product vision to life with our expert team. We develop innovative software products using the latest technologies to meet your requirements.' />
                </div>
            </div>
            <div className="w-full bg-[#E8F0FA] ">
                <div className="max-w-[1200px] mx-auto py-[52px] px-[15px] md:px-[20px] ">
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
                <div className="max-w-[1200px] mx-auto py-[50px] px-[15px] md:px-[20px] ">
                    <h2 className=" text-center text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  max-w-[660px] mx-auto ">Have a project? Let's discuss</h2>
                    <p className=" text-[14px] sm:text-[15px] text-[#0A0E19] text-center mt-[16px] ">Once you submit this form, expect to hear back from us within 24 hours.</p>
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
  
  export default ServiceDetails;