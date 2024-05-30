import Logo from "../Logo";
import Cluch from "../SVGs/CluchSvg";
import FBSvg from "../SVGs/FaceBook";
import InstaSvg from "../SVGs/Instagram";
import LinkedIn from "../SVGs/LinkedIn";
import Pak from "../SVGs/PakLocation";
import RatingStarRed from "../SVGs/RatingStarRed";
import TwitterSvg from "../SVGs/Twitter";
import UAE from "../SVGs/UAELocation";
import UK from "../SVGs/UKLocation";
import img from '../../assets/Images/Group 1000008093.png'
import FooterItem from "./FooterLiItem";
import Whatsaap from "../SVGs/WhatsaapIco";




function Footer() {
    return (
        <>
            <footer className="w-full bg-[#11335A]  " >
                <main className="max-w-[1200px] mx-auto ">
                    <div className="py-[42px] px-[15px] sm:px-[20px] ">
                        <div className="flex items-center justify-between ">
                            
                            <img className="h-[50px] cursor-pointer " src={img} alt="" />
                            <div className="sm:block hidden ">
                                <div className="flex items-center gap-[6px] ">
                                    <div className="flex flex-col items-center gap-[2px] ">
                                        <div>
                                            <p className="text-[#fff] text-[10px] uppercase font-[300] ">Reviewed on</p>
                                        </div>
                                        <Cluch/>
                                    </div>
                                    <div className="flex flex-col items-center gap-[9px] mt-[4px] ">
                                        <div className= "flex items-center gap-[2px] ">
                                            <RatingStarRed/>
                                            <RatingStarRed/>
                                            <RatingStarRed/>
                                            <RatingStarRed/>
                                            <RatingStarRed/>
                                        </div>
                                        <div>
                                            <p className="text-[#fff] text-[10px] uppercase font-[300] ">35 Reviews</p>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        <div className="bg-[#224871] rounded-[14px] p-[18px] sm:p-[30px] lg:p-[42px] flex items-center gap-[30px] lg:gap-[58px] mt-[32px] flex-col md:flex-row ">
                            <div className= "flex flex-1 w-full rounded-[8px] overflow-hidden flex-col sm:flex-row gap-[7px] sm:gap-[0px] ">
                                <input className="px-[12px] py-[12px] outline-none border-[0px] text-[14px] text-[#001436] flex-1 rounded-[8px] sm:rounded-[0px] " type="email" name="" id="" placeholder="Email Address" required />
                                <div className="bg-[#0D99FF] flex items-center justify-center px-[28px] cursor-pointer uppercase select-none text-[15px] h-[48px] text-[#fff] font-[500] rounded-[8px] sm:rounded-[0px] ">Subcribe</div>
                            </div>
                            <div className="flex-1 w-full flex items-center gap-[26px] justify-center md:justify-end flex-wrap  ">
                                <h2 className="text-[#fff] text-[23px] font-[600] ">Locations</h2>
                                <div className="flex items-center gap-[24px] ">
                                    <div className="flex items-center gap-[8px] ">
                                        <span className="flex items-center justify-center h-[32px] w-[32px] ">
                                            <UAE/>
                                        </span>
                                        <p className="text-[#fff] text-[15px] " >UAE</p>
                                    </div>
                                    <div className="flex items-center gap-[8px] ">
                                        <span className="flex items-center justify-center h-[32px] w-[32px] ">
                                            <UK/>
                                        </span>
                                        <p className="text-[#fff] text-[15px] " >UK</p>
                                    </div>
                                    <div className="flex items-center gap-[8px] ">
                                        <span className="flex items-center justify-center h-[32px] w-[32px] ">
                                            <Pak/>
                                        </span>
                                        <p className="text-[#fff] text-[15px] " >Pak</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[12px] ">
                            <div className="pt-[18px] flex gap-[30px] flex-wrap ">
                                <div className="flex-[3] w-full">
                                    <h2 className="text-[#fff] text-[21px] font-[500] ">Capabilities</h2>
                                    <div className="flex pt-[22px] flex-wrap gap-[30px] ">
                                        <div className="flex-1 w-full ">
                                            <FooterItem heading = 'Web App Development' />
                                            <FooterItem heading = 'Mobile App Development' />
                                            <FooterItem heading = 'Flutter Development' />
                                            <FooterItem heading = 'Ruby on Rails Development' />
                                            <FooterItem heading = 'React JS Development' />
                                        </div>
                                        <div className="flex-1 w-full ">
                                            <FooterItem heading = 'AWS Cloud Services' />
                                            <FooterItem heading = 'Google Cloud Services' />
                                            <FooterItem heading = 'Microsoft Azure Development' />
                                            <FooterItem heading = 'React Native Development' />
                                            <FooterItem heading = 'Machine Learning' />
                                        </div>
                                        <div className="flex-1 w-full ">
                                            <FooterItem heading = 'Cross-Platform Development' />
                                            <FooterItem heading = 'Enterprise App Development' />
                                            <FooterItem heading = 'Custom Software Development' />
                                            <FooterItem heading = 'N Style' />
                                            <FooterItem heading = 'Deelly' />
                                        </div>  
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-[#fff] text-[21px] font-[500] ">Services</h2>
                                    <div className="pt-[22px] ">
                                        <FooterItem heading = 'Digital Product Development' />
                                        <FooterItem heading = 'Staff Augmentation' />
                                        <FooterItem heading = 'Data Analytics and Management' />
                                        <FooterItem heading = 'Digital Strategy Consultation' />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-[#fff] text-[21px] font-[500] ">projects</h2>
                                    <div className="pt-[22px] ">
                                        <FooterItem heading = 'Aligner 4D' />
                                        <FooterItem heading = 'BDD' />
                                        <FooterItem heading = 'Rise' />
                                        <p className="border-b border-[#fff] text-[13px] text-[#fff] mt-[7px] cursor-pointer max-w-max ">View All</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[22px] sm:pt-[32px] pb-[32px] flex justify-between px-[12px] flex-col-reverse sm:flex-row ">
                        <div className="mt-[22px] sm:mt-[0px] display_flex ">
                            <div className="flex items-center gap-[12px] sm:gap-[20px] flex-wrap justify-center ">
                                <div className="flex items-center gap-[9px] ">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1162 2.5C15.2337 2.5 16.3087 2.94167 17.0995 3.73417C17.8912 4.525 18.3337 5.59167 18.3337 6.70833V13.2917C18.3337 15.6167 16.442 17.5 14.1162 17.5H5.88366C3.55783 17.5 1.66699 15.6167 1.66699 13.2917V6.70833C1.66699 4.38333 3.54949 2.5 5.88366 2.5H14.1162ZM15.4419 7.94962L15.5086 7.88296C15.7078 7.64129 15.7078 7.29129 15.4994 7.04962C15.3836 6.92546 15.2244 6.84962 15.0586 6.83296C14.8836 6.82379 14.7169 6.88296 14.5911 6.99962L10.8336 9.99962C10.3503 10.4005 9.65777 10.4005 9.16693 9.99962L5.41693 6.99962C5.15777 6.80796 4.79943 6.83296 4.5836 7.05796C4.3586 7.28296 4.3336 7.64129 4.52443 7.89129L4.6336 7.99962L8.42527 10.958C8.89193 11.3246 9.45777 11.5246 10.0503 11.5246C10.6411 11.5246 11.2169 11.3246 11.6828 10.958L15.4419 7.94962Z" fill="#0D99FF"/>
                                    </svg>
                                    <p className="text-[#fff] text-[13px] sm:text-[14px] font-[300] ">team@hashedsystem.com</p>
                                </div>
                                <span className="flex items-center justify-center h-[30px] w-[30px] cursor-pointer ">
                                    <FBSvg/>
                                </span>
                                <span className="flex items-center justify-center h-[30px] w-[30px] cursor-pointer ">
                                    <TwitterSvg/>
                                </span>
                                <span className="flex items-center justify-center h-[30px] w-[30px] cursor-pointer ">
                                    <InstaSvg/>
                                </span>
                                <span className="flex items-center justify-center h-[30px] w-[30px] cursor-pointer ">
                                    <LinkedIn/>
                                </span>
                            </div>
                            <p className="text-[#e5e8eca2] text-[11px] font-[300] mt-[17px] ">© Copyright HashedSystem 2024. All rights reserved.</p>
                        </div>
                        <div className=" ">
                            <div className="flex items-center gap-[8px] ">
                                <Whatsaap/>
                                <p className="text-[20px] font-[600] text-[#fff] ">Contact</p>
                            </div>
                            <div className="mt-[4px] ">
                                <p className="text-[12px] text-[#fff] font-[200] " >+971 52 5201204</p>
                                <p className="text-[12px] text-[#fff] font-[200] " >+44 7909 834259</p>
                            </div>
                        </div>
                    </div>
                </main>
            </footer>
        </>
    );
  }
  
  export default Footer;