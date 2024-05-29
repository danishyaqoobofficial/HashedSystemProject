import img from '../../assets/Images/laptop-2 1.png'
import TopRightArrow from '../SVGs/TopRightArrow';

function ProjectSingleCard(props) {
    return (
        <>
            <div className="max-w-[430px] w-full ">
                <div className="  rounded-[12px] w-full pt-[20px] overflow-hidden " style={{backgroundColor : props.color , paddingLeft : props.paddingLeft , paddingRight : props.paddingRight}}  >
                    <img className='h-[240px] sm:h-[260px] w-full' src= {props.image} alt="" />
                </div>
                <div className='flex items-center justify-between w-full pt-[12px] '>
                    <h2 className='text-[#0A0E19] text-[21px] font-[600] line-clamp-1 '>{props.heading}</h2>
                    <div className='flex items-center justify-center h-[40px] w-[40px] rounded-[50px] bg-[#11335A] cursor-pointer '>
                        <TopRightArrow/>
                    </div>
                </div>
                <p className='mt-[14px] text-[13px] text-[#0A0E19] line-clamp-2 '>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum h</p>
                <div className='flex items-center gap-[8px] mt-[11px] '>
                    <div className='text-[#0D99FF] text-[11px] font-[500] bg-[#DDF0FF] rounded-[30px] px-[11px] py-[4px] '>
                        Services
                    </div>
                    <div className='text-[#0D99FF] text-[11px] font-[500] bg-[#DDF0FF] rounded-[30px] px-[11px] py-[4px] '>
                        Services
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default ProjectSingleCard;