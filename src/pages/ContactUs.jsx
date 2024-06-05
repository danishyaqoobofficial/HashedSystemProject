import awardImg1 from '../assets/Images/image 82791.png'
import awardImg2 from '../assets/Images/image 82792.png'
import awardImg3 from '../assets/Images/image 82793.png'
import awardImg4 from '../assets/Images/image 82794.png'
import awardImg5 from '../assets/Images/image 82795.png'
import awardImg6 from '../assets/Images/image 82796.png'
import Location from '../assets/Images/Location.png'
import l1 from '../assets/Images/l1.png'
import l2 from '../assets/Images/l.png'
import l3 from '../assets/Images/l2.png'
import contact_banner from '../assets/Images/contactbanner.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
// Import required modules
import { Autoplay , Navigation } from 'swiper/modules';
import UAE from '../Components/SVGs/UAELocation'
import Pak from '../Components/SVGs/PakLocation'
import UK from '../Components/SVGs/UKLocation'
import RightArrow from '../Components/SVGs/RightArrow'
import { Link } from 'react-router-dom'



function ContactUs() {
    return (
        <>
            <main className='w-full flex flex_col '>
                <div className='w-[50%] flex-1 lenier_g flex_col1 '  >
                    <div className='z-0 w-[580px] flex_col1 ml-auto mt-auto pb-[90px] relative pr-[20px] lg:pr-[120px] overflow-hidden '>
                        <img className=' absolute right-0 select-none !z-0 h-full ' src={contact_banner} alt="" />
                        <div className='pt-[120px] !z-50 padding_left '>
                            <p className='text-[#FFFFFF] text-[14px] font-[300]  '>Lets built the next big thing!</p>
                            <h2 className='text-[38px] font-[600] text-[#fff] mt-[32px] leading-[46px] '>Have a project? Let’s connect</h2>
                            <p className='text-[#ffffffc8] text-[12px] font-[300] mt-[8px] '>Send your details and we’ll get in touch</p>
                            <div className='mt-[16px] '>
                                <div className='flex items-center gap-[8px] mt-[8px] '>
                                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.10892 11.0421C7.90148 10.1165 8.65684 9.19659 9.45368 8.31319C11.214 6.36184 13.1232 4.57215 15.272 3.04569C15.6368 2.78675 16.0023 2.63225 16.4594 2.6723C16.8378 2.70521 17.2233 2.65871 17.6017 2.69019C17.7426 2.70163 17.9451 2.80535 17.988 2.91694C18.0309 3.02995 17.9551 3.2517 17.8556 3.34612C13.7062 7.2853 10.6547 12.0464 7.71192 16.889C7.66829 16.9605 7.62823 17.0327 7.5846 17.1043C7.33996 17.5027 7.09461 17.5006 6.8371 17.1129C5.96086 15.7938 5.09176 14.4698 4.1962 13.1637C3.53598 12.2016 2.84499 11.2602 2.15401 10.3196C1.94872 10.0399 1.93298 9.82177 2.20479 9.57856C2.49735 9.31676 2.77704 9.03779 3.04313 8.74881C3.2756 8.49559 3.48662 8.50275 3.75772 8.69516C4.8643 9.48128 5.9816 10.2531 7.10892 11.0406V11.0421Z" fill="white"/>
                                    </svg>
                                    <p className='text-[11px] text-[#ffffffcb] line-clamp-1  '>Expect a response within 24 hours.</p>
                                </div>
                                <div className='flex items-center gap-[8px] mt-[8px] '>
                                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.10892 11.0421C7.90148 10.1165 8.65684 9.19659 9.45368 8.31319C11.214 6.36184 13.1232 4.57215 15.272 3.04569C15.6368 2.78675 16.0023 2.63225 16.4594 2.6723C16.8378 2.70521 17.2233 2.65871 17.6017 2.69019C17.7426 2.70163 17.9451 2.80535 17.988 2.91694C18.0309 3.02995 17.9551 3.2517 17.8556 3.34612C13.7062 7.2853 10.6547 12.0464 7.71192 16.889C7.66829 16.9605 7.62823 17.0327 7.5846 17.1043C7.33996 17.5027 7.09461 17.5006 6.8371 17.1129C5.96086 15.7938 5.09176 14.4698 4.1962 13.1637C3.53598 12.2016 2.84499 11.2602 2.15401 10.3196C1.94872 10.0399 1.93298 9.82177 2.20479 9.57856C2.49735 9.31676 2.77704 9.03779 3.04313 8.74881C3.2756 8.49559 3.48662 8.50275 3.75772 8.69516C4.8643 9.48128 5.9816 10.2531 7.10892 11.0406V11.0421Z" fill="white"/>
                                    </svg>
                                    <p className='text-[11px] text-[#ffffffcb] line-clamp-1  '>We’re open to signing an NDA, if needed.</p>
                                </div>
                                <div className='flex items-center gap-[8px] mt-[8px] '>
                                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.10892 11.0421C7.90148 10.1165 8.65684 9.19659 9.45368 8.31319C11.214 6.36184 13.1232 4.57215 15.272 3.04569C15.6368 2.78675 16.0023 2.63225 16.4594 2.6723C16.8378 2.70521 17.2233 2.65871 17.6017 2.69019C17.7426 2.70163 17.9451 2.80535 17.988 2.91694C18.0309 3.02995 17.9551 3.2517 17.8556 3.34612C13.7062 7.2853 10.6547 12.0464 7.71192 16.889C7.66829 16.9605 7.62823 17.0327 7.5846 17.1043C7.33996 17.5027 7.09461 17.5006 6.8371 17.1129C5.96086 15.7938 5.09176 14.4698 4.1962 13.1637C3.53598 12.2016 2.84499 11.2602 2.15401 10.3196C1.94872 10.0399 1.93298 9.82177 2.20479 9.57856C2.49735 9.31676 2.77704 9.03779 3.04313 8.74881C3.2756 8.49559 3.48662 8.50275 3.75772 8.69516C4.8643 9.48128 5.9816 10.2531 7.10892 11.0406V11.0421Z" fill="white"/>
                                    </svg>
                                    <p className='text-[11px] text-[#ffffffcb] line-clamp-1 '>Engage directly with our product experts, not account managers</p>
                                </div>
                            </div>
                            <div className='mt-[120px] '>
                                <p className='text-[#ffffffbc] text-[11px]  '>Reach out to us at</p>
                                <h3 className='text-[#fff] text-[18px] font-[600] mt-[6px] '>team@hashedsystem.com</h3>
                                <h3 className='text-[#fff] text-[18px] font-[600] mt-[6px] '>+ 971 52 5201204</h3>
                                <p className='text-[#ffffffc8] text-[13px] mt-[6px]  '>Dubai Digital Park A5 DSO, 1046 - Dubai Silion Oasis</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex-1 flex_col2'>
                    <div className='py-[50px] px-[15px] sm:px-[38px] flex_col2 w-[580px] finish_padding '>
                        <h2 className=" text-[#0A0E19] font-[600] leading-[32px] sm:leading-[50px] text-[24px] sm:text-[32px] md:text-[36px]  ">Contact Us</h2>
                        <div className='mt-[18px] w-full '>
                            <input className='border-[1px] w-full border-[#ced7e4d6] rounded-[7px] text-[#7F8998] text-[14px] flex-1 outline-none px-[18px] py-[10px] ' type="text" name="" id="" placeholder='Name' />
                        </div>
                        <div className='mt-[18px] flex items-center gap-[14px] flex-col sm:flex-row '>
                            <input className='border-[1px] w-full border-[#ced7e4d6] rounded-[7px] text-[#7F8998] text-[14px] flex-1 outline-none px-[18px] py-[10px] ' type="text" name="" id="" placeholder='Mobile' />
                            <input className='border-[1px] w-full border-[#ced7e4d6] rounded-[7px] text-[#7F8998] text-[14px] flex-1 outline-none px-[18px] py-[10px] ' type="text" name="" id="" placeholder='Company' />
                        </div>
                        <div className='mt-[18px] w-full '>
                            <input className='border-[1px] w-full border-[#ced7e4d6] rounded-[7px] text-[#7F8998] text-[14px] flex-1 outline-none px-[18px] py-[10px] ' type="text" name="" id="" placeholder='How did you hear about?' />
                        </div>
                        <textarea className=' mt-[18px] border-[1px] w-full border-[#ced7e4d6] rounded-[7px] text-[#7F8998] text-[14px] flex-1 outline-none px-[18px] py-[10px] resize-none ' name="" id="" cols="30" rows="10"></textarea>
                        <div className='flex items-center gap-[7px] mt-[6px] '>
                            <input id='checkbox' type="checkbox"/>
                            <div className='flex items-center gap-[4px] '>
                                <label htmlFor='checkbox' className='text-[12px] select-none text-[#000000] font-[300] cursor-default '>I agree to all the</label>
                                <Link to={'/terms&condition'} className='text-[12px] text-[#000000] font-[300] cursor-pointer border-b border-[#000000] leading-[14px] '>Terms & Conditons</Link>
                            </div>
                        </div>
                        <div className='mt-[22px] '>
                        <div className="flex items-center gap-[14px] bg-[#0D99FF] rounded-[7px] px-[22px] py-[12px] cursor-pointer max-w-max mt-[16px] sm:mt-[22px] ">
                            <p className="text-[#fff] text-[15px] font-[500] select-none ">Get Quotes</p>
                            <div className="bg-[#fff] rounded-[50px] p-[6px] ">
                                <RightArrow/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="w-full bg-[#fff] ">
                <div className='max-w-[1200px] mx-auto mt-[50px] ' >
                    <div className=' bg-top bg-cover bg-no-repeat px-[15px] sm:px-[20px] pt-[50px] ' style={{backgroundImage : `url(${Location})` }}  >
                        <h2 className="text-center text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">Discover Our Global Presence</h2>
                        <div className='pt-[40px] sm:pt-[55px] flex gap-[22px] flex-wrap justify-center '>
                            <div className='w-[400px] mt-[70px] lg:flex-1 border border-[#CECDD1] rounded-[16px] bg-[#FFFFFF] relative pt-[110px] pl-[22px] leading-5 pb-[32px] '>
                                <div className=' bg-cover bg-no-repeat bg-center h-[130px] sm:h-[140px] w-[130px] sm:w-[140px] rounded-[50%] absolute left-[50%] top-[0px] transorm_translate ' style={{backgroundImage : `url(${l1})` }} ></div>
                                <div className="flex items-center gap-[8px] ">
                                    <span className="flex items-center justify-center h-[34px] w-[34px] ">
                                        <UAE/>
                                    </span>
                                    <p className="text-[#001436] text-[16px] font-[600] " >UAE</p>
                                </div>
                                <p className='text-[#0A0E19] text-[12px] font-[300] line-clamp-3 mt-[12px] w-[85%] '>A5 Dubai Digital Park, Dubai Silicon Oasis, Dubai UAE</p>
                                <p className='text-[#000000] font-[600] text-[14px] mt-[15px] '>+971 52 5201204</p>
                            </div>
                            <div className='w-[400px] mt-[70px] lg:flex-1 border border-[#CECDD1] rounded-[16px] bg-[#FFFFFF] relative pt-[110px] pl-[22px] leading-5 pb-[32px] '>
                                <div className=' bg-cover bg-no-repeat bg-center h-[130px] sm:h-[140px] w-[130px] sm:w-[140px] rounded-[50%] absolute left-[50%] top-[0px] transorm_translate ' style={{backgroundImage : `url(${l2})` }} ></div>
                                <div className="flex items-center gap-[8px] ">
                                    <span className="flex items-center justify-center h-[34px] w-[34px] ">
                                        <UK/>
                                    </span>
                                    <p className="text-[#001436] text-[16px] font-[600] " >UK</p>
                                </div>
                                <p className='text-[#0A0E19] text-[12px] font-[300] line-clamp-3 mt-[12px] w-[85%] '>44 pointelle house, 190 London Road. Wallington - SM6 7FW</p>
                                <p className='text-[#000000] font-[600] text-[14px] mt-[15px] '>+44 7909 834259</p>
                            </div>
                            <div className='w-[400px] mt-[70px] lg:flex-1 border border-[#CECDD1] rounded-[16px] bg-[#FFFFFF] relative pt-[110px] pl-[22px] leading-5 pb-[32px] '>
                                <div className=' bg-cover bg-no-repeat bg-center h-[130px] sm:h-[140px] w-[130px] sm:w-[140px] rounded-[50%] absolute left-[50%] top-[0px] transorm_translate ' style={{backgroundImage : `url(${l3})` }} ></div>
                                <div className="flex items-center gap-[8px] ">
                                    <span className="flex items-center justify-center h-[34px] w-[34px] ">
                                        <Pak/>
                                    </span>
                                    <p className="text-[#001436] text-[16px] font-[600] " >Pak</p>
                                </div>
                                <p className='text-[#0A0E19] text-[12px] font-[300] line-clamp-3 mt-[12px] w-[85%] '>44 pointelle house, 190 London Road. Wallington - SM6 7FW</p>
                                <p className='text-[#000000] font-[600] text-[14px] mt-[15px] '>+44 7909 834259</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1200px] mx-auto '>
                    <div className="mt-[50px] md:mt-[110px] mx-[15px] sm:mx-[20px] ">
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
                    <div className=" flex items-center justify-center gap-[8px] my-[36px] ">
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
            </div>
        </>
    );
  }
  
  export default ContactUs;