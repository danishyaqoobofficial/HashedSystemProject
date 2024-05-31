import { useState } from "react";
import Logo from "../Logo";
import Hamburger from "../SVGs/Hamburger";
import HeaderliItem from "./HeaderLiItem";
import { Link } from "react-router-dom";



function Header() {

    const [toggltSideNav, setToggltSideNav] =  useState(false)

    return (
        <>
            <header className=" bg-[#E8F0FA] w-full relative ">
                <div className="flex items-center max-w-[1200px] mx-auto py-[10px] sm:py-[11px] justify-between px-[15px] sm:px-[20px] ">
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
                            <Link to={`/`}>
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
                    <div className="block lg:hidden">
                        <span className="flex items-center justify-center px-[6px] cursor-pointer " onClick={()=>setToggltSideNav(!toggltSideNav)}>
                            <Hamburger/>
                        </span>
                    </div>
                </div>
                <div className={` bg-[#fff] w-[220px] fixed  top-0 pb-[22px] h-[100%] transition-all z-50 ${toggltSideNav ? "right-0" : "-right-full"} `}>
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
                            <Link to={`/`}>
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
                            <Link to={`/`}>
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