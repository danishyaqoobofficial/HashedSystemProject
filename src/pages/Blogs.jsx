import img1 from '../assets/Images/Group 1000008808.png'
import img2 from '../assets/Images/Group 1000008809.png'
import img3 from '../assets/Images/imageblog.png'
import img4 from '../assets/Images/trade.png'
import backgroundImage from '../assets/Images/Ellipse 2363.png'
import bg from '../assets/Images/bg.png'
import bg1 from '../assets/Images/bg1.png'
import bg2 from '../assets/Images/bg2.png'
import bg3 from '../assets/Images/bg3.png'
import bg4 from '../assets/Images/bg4.png'
import bg5 from '../assets/Images/bg5.png'
import bg6 from '../assets/Images/bg6.png'
import bg7 from '../assets/Images/bg7.png'



import BlogCard from '../Components/Cards/BlogCard'






function Blogs() {
    return (
        <>
            <section className="w-full bg-[#062345] relative ">
                <div className="max-w-[900px] w-[90%] md:w-full mx-auto pt-[120px] pb-[250px] px-[15px] md:px-[20px] ">
                    <h2 className="text-[34px] sm:text-[42px] md:text-[55px] font-[600] text-[#fff] text-center ">Blog</h2>
                    <p className=" text-[14px] sm:text-[16px] md:text-[18px] text-[#fff] text-center font-[300] mt-[12px] z-50 ">Hashed System is a leading software development company in Dubai offering custom solutions. We aim to deliver innovative technology products that bring client satisfaction.</p>
                </div>
                <img className=' absolute bottom-0 left-0 h-[440px] z-0 ' src={img1} alt="" />
                <img className=' absolute bottom-0 right-[30px] z-0 ' src={img2} alt="" />
           </section>
           <main className=' w-full bg-[#fff] ' >
                <div className='max-w-[1200px] mx-auto px-[15px] md:px-[20px] relative pb-[32px] pt-[460px] md:pt-[340px] '>
                    <div className=' w-[97%] mx-auto border border-[#CECDD1] rounded-[20px] overflow-hidden flex absolute md:flex-row flex-col -top-[130px] right-0 left-0 '>
                        <div className='h-[250px] sm:h-[320px] md:h-[400px] md:flex-1 w-full bg-cover bg-no-repeat bg-center'  style={{backgroundImage : `url(${img3})`}} ></div>
                        <div className='pb-[32px] md:pt-[50px] pt-[26px] px-[22px] md:max-w-[370px] w-full bg-[#fff]  '>
                            <div className=' w-full flex items-center justify-between gap-[22px] '>
                                <span className='rounded-[30px] bg-[#DDF0FF] px-[16px] py-[4px] flex items-center justify-center text-[#0D99FF] text-[11px] font-[500] ' >
                                    Services
                                </span>
                                <p className='text-[#0D99FF] text-[11px] font-[500] whitespace-nowrap '>21 May 2024</p>
                            </div>
                            <h2 className='mt-[14px] text-[20px] font-[600] text-[#0A0E19] line-clamp-3 '>What is agile software development?</h2>
                            <p className='text-[#0A0E19] text-[13px] mt-[10px] line-clamp-5 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                            <div className="flex items-center gap-[6px] mt-[16px] ">
                                <div className="rounded-[50px] h-[42px] w-[42px] bg-cover bg-center bg-no-repeat " style={{backgroundImage : `url(${backgroundImage})`}} ></div>
                                <div className=" ">
                                    <h2 className="text-[13px] font-[600] text-[#0A0E19] ">Lana Bernier</h2>
                                    <p className="text-[#0A0E19] text-[10px] ">Senior Paradigm Strategist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-[14px] md:flex-row flex-col '>
                        <BlogCard bg = {bg2} date = '28 May 2024' heading = 'How to Assess a Mobile Application’s Value?' peragraph = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' />
                        <BlogCard bg = {bg3} date = '28 May 2024' heading = 'How to Assess a Mobile Application’s Value?' peragraph = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' />
                        <BlogCard bg = {bg4} date = '28 May 2024' heading = 'How to Assess a Mobile Application’s Value?' peragraph = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' />
                    </div>
                    <div className='flex items-center gap-[14px] mt-[82px] md:flex-row flex-col '>
                        <BlogCard bg = {bg1} date = '28 May 2024' heading = 'How to Assess a Mobile Application’s Value?' peragraph = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' />
                        <BlogCard bg = {bg} date = '28 May 2024' heading = 'How to Assess a Mobile Application’s Value?' peragraph = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' />
                    </div>
                    <div className='flex items-center gap-[22px] mt-[82px] md:flex-row flex-col '>
                        <BlogCard bg = {bg5} date = '28 May 2024' heading = 'How to Assess a Mobile Application’s Value?' peragraph = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' />
                        <BlogCard bg = {bg6} date = '28 May 2024' heading = 'How to Assess a Mobile Application’s Value?' peragraph = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' />
                        <BlogCard bg = {bg7} date = '28 May 2024' heading = 'How to Assess a Mobile Application’s Value?' peragraph = 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h' />
                    </div>
                    <div className='  w-full border border-[#CECDD1] rounded-[20px] overflow-hidden flex mt-[82px] md:flex-row flex-col '>
                        <div className='h-[250px] sm:h-[320px] md:h-[400px] md:flex-1 w-full bg-cover bg-no-repeat bg-center'  style={{backgroundImage : `url(${img4})`}} ></div>
                        <div className='pb-[32px] md:pt-[50px] pt-[26px] px-[22px] md:max-w-[370px] w-full bg-[#fff]  '>
                            <div className=' w-full flex items-center justify-between gap-[22px] '>
                                <span className='rounded-[30px] bg-[#DDF0FF] px-[16px] py-[4px] flex items-center justify-center text-[#0D99FF] text-[11px] font-[500] ' >
                                    Services
                                </span>
                                <p className='text-[#0D99FF] text-[11px] font-[500] whitespace-nowrap '>21 May 2024</p>
                            </div>
                            <h2 className='mt-[14px] text-[20px] font-[600] text-[#0A0E19] line-clamp-3 '>What is agile software development?</h2>
                            <p className='text-[#0A0E19] text-[13px] mt-[10px] line-clamp-5 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                            <div className="flex items-center gap-[6px] mt-[16px] ">
                                <div className="rounded-[50px] h-[42px] w-[42px] bg-cover bg-center bg-no-repeat " style={{backgroundImage : `url(${backgroundImage})`}} ></div>
                                <div className=" ">
                                    <h2 className="text-[13px] font-[600] text-[#0A0E19] ">Lana Bernier</h2>
                                    <p className="text-[#0A0E19] text-[10px] ">Senior Paradigm Strategist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </main>
        </>
    );
  }
  
  export default Blogs;