import StarSVG from "../SVGs/StarSvg";



function Announcement() {
    return (
        <>
            <div className="bg-[#0D99FF] w-full flex items-center justify-center gap-[14px] py-[7px] md:py-[8px] px-[12px] ">
                <span className="flex items-center justify-center ">
                    <StarSVG/>
                </span>
                <p className= " text-[#fff] text-[12px] md:text-[13px] line-clamp-1 ">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                <span className="flex items-center justify-center ">
                    <StarSVG/>
                </span>
            </div>
        </>
    );
  }
  
  export default Announcement;