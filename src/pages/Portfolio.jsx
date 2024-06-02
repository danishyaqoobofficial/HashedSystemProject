import ProjectSingleCard from "../Components/Cards/ProjectSingleCard";
import RightArrow from "../Components/SVGs/RightArrow";
import projectCardImage1 from '../assets/Images/laptop-2 1.png'
import projectCardImage2 from '../assets/Images/image 82788.png'
import projectCardImage3 from '../assets/Images/image 82790.png'
import projectCardImage4 from '../assets/Images/image 82789.png'




function Portfolio() {
    return (
        <>
            <main className="bg-[#fff] w-full">
                <div className="flex items-center justify-center sm:justify-between py-[32px] max-w-[1200px] mx-auto px-[15px] md:px-[20px] sm:flex-row flex-col gap-[16px] " >
                    <div className="flex items-center gap-[9px] md:gap-[12px] flex-wrap justify-center ">
                        <div className="flex items-center justify-center cursor-pointer text-[13px] font-[600] px-[22px] py-[12px] rounded-[8px] bg-[#DDF0FF] text-[#0D99FF] hover:text-[#FFFFFF] hover:bg-[#0D99FF] transition-all ">
                            Website
                        </div>
                        <div className="flex items-center justify-center cursor-pointer text-[13px] font-[600] px-[22px] py-[12px] rounded-[8px] bg-[#DDF0FF] text-[#0D99FF] hover:text-[#FFFFFF] hover:bg-[#0D99FF] transition-all ">
                            Mobile
                        </div>
                        <div className="flex items-center justify-center cursor-pointer text-[13px] font-[600] px-[22px] py-[12px] rounded-[8px] bg-[#DDF0FF] text-[#0D99FF] hover:text-[#FFFFFF] hover:bg-[#0D99FF] transition-all ">
                            Branding
                        </div>
                    </div>
                    <div className="rounded-[8px] cursor-default border border-[#CECDD1] px-[16px] py-[11px] max-w-[280px] w-full flex items-center justify-between ">
                        <p className="text-[12px] font-[500] text-[#0A0E19] ">Latest</p>
                        <svg width="12" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 9L17 1" stroke="#0A0E19" stroke-width="2"/>
                        </svg>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto px-[15px] mt-[14px] md:px-[20px] pb-[52px] ">
                    <div className="flex items-center flex-wrap md:mt-[50px] gap-[22px] justify-center ">
                        <ProjectSingleCard color = '#eae1ca' image = {projectCardImage1} heading = 'N Style' />
                        <ProjectSingleCard color = '#d0efe5' image = {projectCardImage2} heading = 'Concierge Bookings' />
                        <ProjectSingleCard color = '#8ec39f' image = {projectCardImage3} heading = 'Endup' paddingLeft = '20px' paddingRight = '20px' />
                        <ProjectSingleCard color = '#b1d1f3' image = {projectCardImage4} heading = 'OneMove' />
                        <ProjectSingleCard color = '#eae1ca' image = {projectCardImage1} heading = 'N Style' />
                        <ProjectSingleCard color = '#d0efe5' image = {projectCardImage2} heading = 'Concierge Bookings' />
                        <ProjectSingleCard color = '#8ec39f' image = {projectCardImage3} heading = 'Endup' paddingLeft = '20px' paddingRight = '20px' />
                        <ProjectSingleCard color = '#b1d1f3' image = {projectCardImage4} heading = 'OneMove' />
                    </div>
                    <div className="flex items-center justify-center mt-[52px]  ">
                        <div className="flex items-center gap-[14px] bg-[#0D99FF] rounded-[7px] px-[22px] py-[12px] cursor-pointer">
                            <p className="text-[#fff] text-[15px] font-[500] select-none ">Load More</p>
                            <div className="bg-[#fff] rounded-[50px] p-[6px] ">
                                <RightArrow/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
  }
  
  export default Portfolio;