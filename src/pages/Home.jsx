import PK from "../Components/SVGs/PakLocation";
import UK from "../Components/SVGs/UKLocation";
import RightArrow from "../Components/SVGs/RightArrow";
import UAE from "../Components/SVGs/UAELocation";
import img from '../assets/Images/hero-image.png'
import img1 from '../assets/Images/1.png'
import img2 from '../assets/Images/2.png'
import img3 from '../assets/Images/3.png'
import img4 from '../assets/Images/4.png'
import img5 from '../assets/Images/5.png'
import img6 from '../assets/Images/6.png'
import img7 from '../assets/Images/7.png'
import img8 from '../assets/Images/image 82785 1.png'
import ServiceSingleCard from "../Components/Cards/ServiceSingleCard";
import image1 from '../assets/Images/image 82786.png'
import image2 from '../assets/Images/laravel-logo 1.png'
import image3 from '../assets/Images/product 1.png'
import image4 from '../assets/Images/image 82787.png'
import ProjectSingleCard from "../Components/Cards/ProjectSingleCard";
import projectCardImage1 from '../assets/Images/laptop-2 1.png'
import projectCardImage2 from '../assets/Images/image 82788.png'
import projectCardImage3 from '../assets/Images/image 82790.png'
import projectCardImage4 from '../assets/Images/image 82789.png'
import RatingStar from "../Components/SVGs/RatingSDtar";
import ReviewCard from "../Components/Cards/ReviewCard";
import Footer from "../Components/Footer/Footer";
import BigObjectSvg from "../Components/SVGs/BigObjectSvg";
import FormLableInput from "../Components/Form/LableInput";
import Textarea from "../Components/Form/Textarea";
import ServiceSmallCard from "../Components/Cards/ServiceSmallCard";
import backgroundImage from '../assets/Images/back.png'
import awardImg1 from '../assets/Images/image 82791.png'
import awardImg2 from '../assets/Images/image 82792.png'
import awardImg3 from '../assets/Images/image 82793.png'
import awardImg4 from '../assets/Images/image 82794.png'
import awardImg5 from '../assets/Images/image 82795.png'
import awardImg6 from '../assets/Images/image 82796.png'
import bg from '../assets/Images/bg.png'
import bg1 from '../assets/Images/bg1.png'
import BlogCard from "../Components/Cards/BlogCard";
import StoriesSingleCard from "../Components/Cards/StoriesSingleCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
// Import required modules
import { Autoplay , Navigation } from 'swiper/modules';


function LandingPage() {
    return (
        <>
            <main className="bg-[#E8F0FA] w-full ">
                <section className="max-w-[1200px] mx-auto pt-[30px] md:pt-[60px] xl:pt-[80px] flex gap-[18px] md:gap-[22px] px-[15px] sm:px-[20px] lg:flex-row flex-col ">
                    <div className="flex-1 pt-[32px] ">
                        <h2 className="text-[32px] sm:text-[42px] md:text-[60px] text-[#001436] font-[600] text-start leading-[48px] md:leading-[70px] line-clamp-3 ">Software Development & IT Company</h2>
                        <p className="text-[#0D99FF] text-[24px] sm:text-[28px] md:text-[32px] mt-[14px] font-[600] text-start line-clamp-1 ">in Dubai - Hashed System</p>
                        <p className="text-start text-[#001436] text-[13px] sm:text-[14px] md:text-[16px] mt-[12px] line-clamp-4 ">Hashed System is a leading software development company in Dubai offering custom solutions. We aim to deliver innovative technology products that bring client satisfaction.</p>
                        <div className="flex items-center gap-[14px] bg-[#0D99FF] rounded-[7px] px-[22px] py-[12px] cursor-pointer max-w-max mt-[16px] sm:mt-[22px] ">
                            <p className="text-[#fff] text-[15px] font-[500] select-none ">Get Quotes</p>
                            <div className="bg-[#fff] rounded-[50px] p-[6px] ">
                                <RightArrow/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img src={img} alt="" />
                    </div>
                </section>
            </main>
            <div className="bg-[#1E4470] w-full py-[22px] ">
                <div className="flex gap-[22px] lg:gap-[30px] justify-center flex-wrap ">
                    <div className="px-[42px] py-[8px] border-r border-[#3e5e82] remove_border1 ">
                        <h2 className="text-[28px] md:text-[34px] text-[#fff] text-center font-[300] ">30+ projects</h2>
                        <p className="text-[11px] md:text-[12px] text-[#FFFFFF] text-center ">successfully delivered</p>
                    </div>
                    <div className="px-[42px] py-[8px] border-r border-[#3e5e82] remove_border ">
                        <h2 className="text-[28px] md:text-[34px] text-[#fff] text-center font-[300] ">25 Members</h2>
                        <p className="text-[11px] md:text-[12px] text-[#FFFFFF] text-center ">in-house collaborators</p>
                    </div>
                    <div className="px-[42px] py-[8px]">
                        <h2 className="text-[28px] md:text-[34px] text-[#fff] text-center font-[300] ">Locations</h2>
                        <div className="flex items-center gap-[16px] ">
                            <div className="flex items-center gap-[6px] ">
                                <span className="flex items-center justify-center h-[22px] w-[22px] ">
                                    <UAE/>
                                </span>
                                <p className="text-[#fff] text-[13px] " >UAE</p>
                            </div>
                            <div className="flex items-center gap-[6px] ">
                                <span className="flex items-center justify-center h-[22px] w-[22px] ">
                                    <UK/>
                                </span>
                                <p className="text-[#fff] text-[13px] " >UK</p>
                            </div>
                            <div className="flex items-center gap-[6px] ">
                                <span className="flex items-center justify-center h-[22px] w-[22px] ">
                                    <PK/>
                                </span>
                                <p className="text-[#fff] text-[13px] " >Pak</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#fff] py-[42px] ">
                <div className="max-w-[1200px] mx-auto flex items-center gap-[12px] md:gap-[32px] justify-between sm:flex-row flex-col px-[15px] sm:px-[20px]  ">
                    <div className=" flex-1 ">
                        <h2 className="text-center text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px] sm:text-start ">Our Valued Clients</h2>
                        <p className="text-[12px] md:text-[13px] mt-[9px] text-center sm:text-start text-[#001436] ">Build seamless mobile apps with Flutter. Its layered architecture enables flexible designs and high-speed rendering, allowing us to focus on optimized user experiences. Flutter empowers us to deliver customized front-end and back-end mobile solutions.</p>
                    </div>
                    <div className="flex items-center gap-[12px] md:gap-[16px] flex-wrap flex-1 justify-center mt-[15px] sm:mt-[0px] ">
                        <img className="h-[56px] w-[110px] " src={img1} alt="" />
                        <img className="h-[56px] w-[110px] " src={img2} alt="" />
                        <img className="h-[56px] w-[110px] " src={img3} alt="" />
                        <img className="h-[56px] w-[110px] " src={img4} alt="" />
                        <img className="h-[56px] w-[110px] " src={img5} alt="" />
                        <img className="h-[56px] w-[110px] " src={img6} alt="" />
                        <img className="h-[56px] w-[110px] " src={img7} alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-[#E8F0FA] py-[44px] w-full ">
                <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[20px] ">
                    <h2 className=" text-center text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">Our Services</h2>
                    <div className="mt-[22px] bg-[#0D99FF] rounded-[20px] p-[30px] flex gap-[42px] items-center flex-col-reverse sm:flex-row ">
                        <div className="flex-[3] ">
                            <h2 className="text-[#fff] font-[500] text-[24px] md:text-[28px] text-start ">Django - Python Application</h2>
                            <p className="text-[12px] sm:text-[13px] text-[#FFFFFF] text-start mt-[12px] line-clamp-4 ">Build seamless mobile apps with Flutter. Its layered architecture enables flexible designs and high-speed rendering, allowing us to focus on optimized user experiences. Flutter empowers us to deliver customized front-end and back-end mobile solutions.</p>
                            <div className="rounded-[7px] bg-[#fff] px-[22px] py-[10px] cursor-pointer flex items-center justify-center text-[#0D99FF] font-[600] text-[13px] uppercase max-w-max mt-[22px] ">
                                more info
                            </div>
                        </div>
                        <div className="flex-[2] flex items-center justify-center  ">
                            <div>
                                <img className=" " src={img8} alt="" />
                                <div className= " hidden sm:block">
                                    <div className="flex items-center justify-end ">
                                        <div className="bg-[#ABDCFF] rounded-[50px] h-[32px] w-[32px] flex items-center justify-center ">
                                            <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.1266 0.0214844H1.19766C0.536209 0.0214844 0 0.557693 0 1.21914C0 1.88059 0.53621 2.4168 1.19766 2.4168H15.1266C15.788 2.4168 16.3242 1.88059 16.3242 1.21914C16.3242 0.557693 15.788 0.0214844 15.1266 0.0214844Z" fill="#0D99FF"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceSingleCard image = {image1} title = 'Mobile Application (Flutter)' peragraph = 'Develop custom web applications with Laravel clean, expressive code. As a PHP framework, it enables the rapid development of robust web apps.' />
                    <ServiceSingleCard image = {image2} title = 'Laravel - PHP Application' peragraph = 'Build stunning websites and apps with WordPress, the leading open-source CMS. Its elegant architecture makes it our go-to for crafting customized.' />
                    <ServiceSingleCard image = {image3} title = 'Product Development' peragraph = 'Bring your product vision to life with our expert team. We develop innovative software products using the latest technologies to meet your requirements.' />
                    <ServiceSingleCard image = {image4} title = 'WordPress Development' peragraph = 'Bring your product vision to life with our expert team. We develop innovative software products using the latest technologies to meet your requirements.' />
                    <div className="flex items-center justify-center mt-[22px]  ">
                        <div className="flex items-center gap-[14px] bg-[#0D99FF] rounded-[7px] px-[22px] py-[12px] cursor-pointer">
                            <p className="text-[#fff] text-[15px] font-[500] select-none ">View All Services</p>
                            <div className="bg-[#fff] rounded-[50px] p-[6px] ">
                                <RightArrow/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#fff] w-full ">
                <div className="max-w-[1200px] mx-auto">
                    <div className=" py-[52px] px-[15px] sm:px-[20px] ">
                        <div className="flex items-center justify-center ">
                            <div className="rounded-[12px] bg-[#E1ECFF] flex items-center gap-[4px] py-[6px] px-[9px] ">
                                <span className="bg-[#0D99FF] rounded-[50px] h-[7px] w-[7px] ">

                                </span>
                                <p className="text-[12px] text-[#180F34] ">Portfolio</p>
                            </div>
                        </div>
                        <h2 className=" text-center text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px] ">We craft a unique solution for every project</h2>
                        <div className="flex items-center flex-wrap mt-[24px] md:mt-[50px] gap-[22px] justify-center ">
                            <ProjectSingleCard color = '#eae1ca' image = {projectCardImage1} heading = 'N Style' />
                            <ProjectSingleCard color = '#d0efe5' image = {projectCardImage2} heading = 'Concierge Bookings' />
                            <ProjectSingleCard color = '#8ec39f' image = {projectCardImage3} heading = 'Endup' paddingLeft = '20px' paddingRight = '20px' />
                            <ProjectSingleCard color = '#b1d1f3' image = {projectCardImage4} heading = 'OneMove' />
                        </div>
                        <div className="flex items-center justify-center mt-[52px]  ">
                            <div className="flex items-center gap-[14px] bg-[#0D99FF] rounded-[7px] px-[22px] py-[12px] cursor-pointer">
                                <p className="text-[#fff] text-[15px] font-[500] select-none ">Vew All Projects</p>
                                <div className="bg-[#fff] rounded-[50px] p-[6px] ">
                                    <RightArrow/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[22px] ">
                        <h2 className=" text-center text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  max-w-[660px] mx-auto ">Ainlockingliation</h2>
                            <div className=" w-full flex items-center py-[22px] gap-[14px] md:gap-[18px] mt-[15px] justify-center px-[15px] sm:px-[20px] ">
                                <Swiper
                                    slidesPerView={1}
                                    navigation={{
                                        nextEl: '.swiper-button-next-affiliation',
                                        prevEl: '.swiper-button-prev-affiliation',
                                      }}
                                    breakpoints={{
                                        
                                        100: {
                                        slidesPerView: 1,
                                        
                                        },
                                        340: {
                                            slidesPerView: 2,
                                        },
                                        600: {
                                            slidesPerView: 4,
                                            
                                        },
                                        1024: {
                                        slidesPerView: 5,
                                        
                                        },
                                        1440: {
                                        slidesPerView: 6,
                                        
                                        },
                                    }}
                                    spaceBetween={10}
                                    centeredSlides={true}
                                    autoplay={{
                                    delay: 1900,
                                    disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    modules={[ Autoplay, Navigation]}
                                    className="mySwiper w-full"
                                >
                                    <SwiperSlide className="max-w-max min-w-fit " ><ReviewCard/></SwiperSlide>
                                    <SwiperSlide className="max-w-max min-w-fit " ><ReviewCard/></SwiperSlide>
                                    <SwiperSlide className="max-w-max min-w-fit " ><ReviewCard/></SwiperSlide>
                                    <SwiperSlide className="max-w-max min-w-fit " ><ReviewCard/></SwiperSlide>
                                    <SwiperSlide className="max-w-max min-w-fit " ><ReviewCard/></SwiperSlide>
                                    <SwiperSlide className="max-w-max min-w-fit " ><ReviewCard/></SwiperSlide>
                                    <SwiperSlide className="max-w-max min-w-fit " ><ReviewCard/></SwiperSlide>
                                    <SwiperSlide className="max-w-max min-w-fit " ><ReviewCard/></SwiperSlide>
                                </Swiper>
                                

                            </div>
                        <div className=" flex items-center justify-center gap-[8px] ">
                            <button className="swiper-button-prev-affiliation flex items-center justify-center h-[42px] w-[46px] cursor-pointer bg-[#fff] rounded-[12px] border border-[#0D99FF] ">
                                <svg width="18" height="15" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM21 7H1V9H21V7Z" fill="#0D99FF"/>
                                </svg>  
                            </button>
                            <button className="swiper-button-next-affiliation flex items-center justify-center h-[42px] w-[46px] cursor-pointer bg-[#0D99FF] rounded-[12px] border border-[#0D99FF] ">
                                <svg width="18" height="15" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L14.3431 15.0711C13.9526 15.4616 13.3195 15.4616 12.9289 15.0711C12.5384 14.6805 12.5384 14.0474 12.9289 13.6569L18.5858 8L12.9289 2.34315C12.5384 1.95262 12.5384 1.31946 12.9289 0.928932C13.3195 0.538408 13.9526 0.538408 14.3431 0.928932L20.7071 7.29289ZM0 7H20V9H0V7Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-end">
                            <BigObjectSvg/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#E8F0FA] ">
                <div className="max-w-[1200px] mx-auto py-[62px] px-[15px] md:px-[20px] ">
                    <h2 className="text-center text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">Achievements and Success Stories</h2>
                    <p className=" text-[14px] sm:text-[15px] text-[#0A0E19] text-center mt-[12px] ">Our projects showcase our dedication to excellence and product delivery, featuring innovative and impactful solutions.</p>
                    <div className="py-[22px] ">
                        <StoriesSingleCard number = '1' color = '#eae1ca' image = {projectCardImage1} title = 'N Style' peragrapg = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' />
                        <StoriesSingleCard number = '2' color = '#d0efe5' image = {projectCardImage2} title = 'Concierge Bookings' peragrapg = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' row_reverse />
                        <StoriesSingleCard number = '3' lastElement color = '#b1d1f3' image = {projectCardImage4} title = 'OneMove' peragrapg = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' />
                    </div>
                    <div className="flex items-center justify-center mt-[52px]  ">
                        <div className="flex items-center gap-[14px] bg-[#0D99FF] rounded-[7px] px-[22px] py-[12px] cursor-pointer">
                            <p className="text-[#fff] text-[15px] font-[500] select-none ">Explore Projects</p>
                            <div className="bg-[#fff] rounded-[50px] p-[6px] ">
                                <RightArrow/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#fff]  " >
                <div className="max-w-[1200px] mx-auto py-[32px] px-[15px] md:px-[20px] ">
                    <h2 className="text-center text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px] ">Unlocking Business Potential Through Our Expertise</h2>
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
                    <div className="flex items-center justify-center gap-[22px] mt-[22px] flex-col md:flex-row">
                        <div className=" flex-1 w-full bg-cover bg-no-repeat bg-center h-[340px] rounded-[20px] " src="" alt="" style={{backgroundImage : `url(${backgroundImage})`}}  ></div>
                        <div className="flex-1 w-full ">
                            <h2 className="text-[22px] text-[#001436] font-[600] ">Data Analytics</h2>
                            <p className="text-[12px] text-[#001436] mt-[6px] line-clamp-4 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="mt-[70px] rounded-[20px] bg-[#0D99FF] px-[30px] md:px-[50px] py-[32px] md:py-[42px] flex justify-between gap-[18px] md:gap-[22px] items-center sm:flex-row flex-col ">
                        <h2 className= "text-[24px] md:text-[35px] text-[#fff] font-[600] sm:text-start text-center line-clamp-2 ">Ready to empower your product vision with us?</h2>
                        <div className="flex items-center gap-[14px] bg-[#FFFFFF] rounded-[7px] px-[22px] py-[12px] cursor-pointer max-w-max">
                            <p className="text-[#0D99FF] text-[15px] font-[500] select-none whitespace-nowrap ">Get Quotes</p>
                            <div className="bg-[#0D99FF] rounded-[50px] p-[6px] ">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6991 6.39896C15.0311 6.7309 15.0311 7.2691 14.6991 7.60104L9.28976 13.0104C8.95781 13.3424 8.41962 13.3424 8.08768 13.0104C7.75573 12.6785 7.75573 12.1403 8.08768 11.8083L12.896 7L8.08768 2.19167C7.75573 1.85973 7.75573 1.32154 8.08768 0.989592C8.41962 0.657647 8.95781 0.657647 9.28976 0.989592L14.6991 6.39896ZM0.0730858 6.15H14.0981V7.85H0.0730858V6.15Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center text-[#0A0E19] font-[600] mt-[50px] md:mt-[110px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">Technology</h2>
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
                    <div className="max-w-[1200px] mx-auto mt-[50px] md:mt-[110px] ">
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
  
  export default LandingPage;