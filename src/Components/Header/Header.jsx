import { useState } from "react";
import Logo from "../Logo";
import Hamburger from "../SVGs/Hamburger";
import HeaderliItem from "./HeaderLiItem";
import { Link } from "react-router-dom";
import awardImg1 from '../../assets/Images/image 82791.png'
import awardImg2 from '../../assets/Images/image 82792.png'
import awardImg3 from '../../assets/Images/image 82793.png'
import awardImg4 from '../../assets/Images/image 82794.png'
import awardImg5 from '../../assets/Images/image 82795.png'
import headerSlider1 from '../../assets/Images/image 82785 1.png'
import headerSlider2 from '../../assets/Images/image 82786.png'
import headerSlider3 from '../../assets/Images/image 82787.png'
import headerSlider4 from '../../assets/Images/product 1.png'
import headerSlider5 from '../../assets/Images/laravel-logo 1.png'



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
// Import required modules
import { Autoplay , Navigation } from 'swiper/modules';




import 'swiper/swiper-bundle.css'; // Ensure you have the Swiper CSS

import { Pagination } from 'swiper/modules';



function Header() {

    const [toggltSideNav, setToggltSideNav] =  useState(false)

    return (
        <>
            <header className=" bg-[#E8F0FA] w-full ">
                <div className="relative flex items-center max-w-[1200px] mx-auto py-[10px] sm:py-[11px] justify-between px-[15px] sm:px-[20px] ">
                    <Logo/>
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-[28px] lg:gap-[44px] ">
                            <Link to={`/`}>
                                <div className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                                    Home
                                    <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
                                </div>
                            </Link>
                            <Link to={`/about`}>
                                <div className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                                About Us
                                    <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
                                </div>
                            </Link>
                            <Link to={`/service-details`}>
                                <div className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                                Services
                                    <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
                                </div>
                            </Link>
                            <Link to={`/portfolio`}>
                                <div className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                                portfolio
                                    <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
                                </div>
                            </Link>
                            <Link to={`/blogs`}>
                                <div className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                                Blogs
                                    <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
                                </div>
                            </Link>
                            <Link to={`/contact`}>
                                <div className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                                Contact Us
                                    <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
                                </div>
                            </Link>
                            <div className="flex items-center justify-center px-[22px] py-[9px] bg-[#0D99FF] rounded-[7px] text-[14px] lg:text-[15px] text-[#fff] cursor-pointer select-none font-[400] ">
                                Get Quotes
                            </div>
                        </div>
                    </div>
                    <div className="block lg:hidden ">
                        <span className="flex items-center justify-center px-[6px] cursor-pointer " onClick={()=>setToggltSideNav(!toggltSideNav)}>
                            <Hamburger/>
                        </span>
                    </div>
                    {/* <div className=" w-[100%] right-0 left-0 absolute bg-[#fff] flex top-[72px] shadow-md items-start rounded-b-[20px] p-[42px] gap-[10px] ">
                        <div className="">
                            <Swiper
                                spaceBetween={12}
                                autoplay={{
                                    delay: 1900,
                                    disableOnInteraction: false,
                                    }}
                                pagination={true} modules={[Pagination , Autoplay , Navigation ]}
                                
                                className="mySwiper !pb-[66px] !w-[200px] ">
                                    <SwiperSlide><img className="h-[170px] " src={awardImg1} alt="" /></SwiperSlide>
                                    <SwiperSlide><img className="h-[170px] " src={awardImg2} alt="" /></SwiperSlide>
                                    <SwiperSlide><img className="h-[170px] " src={awardImg3} alt="" /></SwiperSlide>
                                    <SwiperSlide><img className="h-[170px] " src={awardImg4} alt="" /></SwiperSlide>
                                    <SwiperSlide><img className="h-[170px] " src={awardImg5} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="flex-1 px-[20px] flex flex-wrap gap-[10px] ">
                            <div className="flex items-center gap-[7px] px-[32px] cursor-default py-[11px] rounded-[16px] hover:bg-[#E8F0FA] transition-all w-[280px] ">
                                <img className="h-[40px] " src={headerSlider1} alt="" />
                                <p className="text-[#0A0E19] text-[13px] font-[400] ">Django - Python Application</p>
                            </div>
                            <div className="flex items-center gap-[7px] px-[32px] cursor-default py-[11px] rounded-[16px] hover:bg-[#E8F0FA] transition-all w-[280px] ">
                                <img className="h-[40px] " src={headerSlider2} alt="" />
                                <p className="text-[#0A0E19] text-[13px] font-[400] ">Mobile Application (Flutter)</p>
                            </div>
                            <div className="flex items-center gap-[7px] px-[32px] cursor-default py-[11px] rounded-[16px] hover:bg-[#E8F0FA] transition-all w-[280px] ">
                                <img className="h-[40px] " src={headerSlider5} alt="" />
                                <p className="text-[#0A0E19] text-[13px] font-[400] ">Laravel - PHP Application</p>
                            </div>
                            <div className="flex items-center gap-[7px] px-[32px] cursor-default py-[11px] rounded-[16px] hover:bg-[#E8F0FA] transition-all w-[280px] ">
                                <img className="h-[40px] " src={headerSlider4} alt="" />
                                <p className="text-[#0A0E19] text-[13px] font-[400] ">Product Development</p>
                            </div>
                            <div className="flex items-center gap-[7px] px-[32px] cursor-default py-[11px] rounded-[16px] hover:bg-[#E8F0FA] transition-all w-[280px] ">
                                <img className="h-[40px] " src={headerSlider3} alt="" />
                                <p className="text-[#0A0E19] text-[13px] font-[400] ">WordPress Development</p>
                            </div>
                            <div className="flex items-center gap-[7px] px-[32px] cursor-default py-[11px] rounded-[16px] hover:bg-[#E8F0FA] transition-all w-[280px] ">
                                <img className="h-[40px] " src={headerSlider3} alt="" />
                                <p className="text-[#0A0E19] text-[13px] font-[400] ">SEO/Digital Marketing</p>
                            </div>
                            <div className="flex items-center gap-[7px] px-[32px] cursor-default py-[11px] rounded-[16px] hover:bg-[#E8F0FA] transition-all w-[280px] ">
                                <img className="h-[40px] " src={headerSlider3} alt="" />
                                <p className="text-[#0A0E19] text-[13px] font-[400] ">UI/UX Deign</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className={`bg-[#fff] w-[220px] fixed  top-0 pb-[22px] h-[100%] transition-all z-50 ${toggltSideNav ? "right-0" : "-right-full"} `}>
                    <div className="flex items-center gap-[28px] lg:gap-[44px] flex-col justify-center h-full ">
                        <div className=" w-full flex items-center justify-end p-[14px] absolute top-10 right-3 " onClick={()=>setToggltSideNav(!toggltSideNav)} >
                            <i class="fa-solid fa-xmark text-[#0D99FF] text-[32px] cursor-pointer "></i>
                        </div>
                            <Link to={`/`}>
                                <div className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                                    Home
                                    <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
                                </div>
                            </Link>
                            <Link to={`/about`}>
                                <div className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                                About Us
                                    <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
                                </div>
                            </Link>
                            <Link to={`/service-details`}>
                                <div className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                                Services
                                    <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
                                </div>
                            </Link>
                            <Link to={`/`}>
                                <div className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                                portfolio
                                    <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
                                </div>
                            </Link>
                            <Link to={`/`}>
                                <div className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                                Blogs
                                    <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
                                </div>
                            </Link>
                            <Link to={`/contact`}>
                                <div className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                                Contact Us
                                    <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
                                </div>
                            </Link>
                        <div className="flex items-center justify-center px-[22px] py-[9px] bg-[#0D99FF] rounded-[7px] text-[14px] lg:text-[15px] text-[#fff] cursor-pointer select-none font-[400] ">
                            Get Quotes
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
  }
  
  export default Header;