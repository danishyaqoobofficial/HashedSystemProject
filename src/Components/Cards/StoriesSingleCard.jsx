



function StoriesSingleCard(props) {
    return (
        <>
            <div className={`flex items-center justify-center gap-[12px] md:gap-[22px] max-w-[900px] mx-auto flex-col mt-[12px] relative z-10  ${props.row_reverse ? 'md:flex-row-reverse' : 'md:flex-row' }`}  >
                <div className="mt-[22px]  rounded-[12px] pt-[20px] overflow-hidden max-w-[420px] w-full " style={{backgroundColor : props.color , paddingLeft : props.paddingLeft , paddingRight : props.paddingRight}}  >
                    <img className='h-[240px] sm:h-[255px]' src= {props.image} alt="" />
                </div>
                <div className="md:block hidden">
                    <div className={`text-2xl text-white rounded-full min-w-10 min-h-10 bg-[#8AAAD2] flex items-center justify-center ${!props.lastElement ? "stories__after" : ""}`}><span>{props.number}</span></div>
                </div>
                <div className="mt-[22px] max-w-[420px] w-full ">
                    <h2 className="text-[22px] text-[#0A0E19] font-[600] line-clamp-1 ">{props.title}</h2>
                    <p className="text-[13px] mt-[4px] text-[#0A0E19] line-clamp-4 ">{props.peragrapg}</p>
                    <div className="border border-[#0D99FF] mt-[12px] cursor-pointer max-w-max rounded-[12px] px-[18px] py-[9px] flex items-center justify-center gap-[7px] bg-[#fff] ">
                        <p className="text-[#0D99FF] text-[12px] font-[500] ">More info</p>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.94667 3.74646C7.91494 3.66463 7.86736 3.58987 7.80667 3.52646L4.47333 0.193131C4.41117 0.130972 4.33738 0.0816653 4.25617 0.0480251C4.17495 0.0143849 4.08791 -0.00292969 4 -0.00292969C3.82247 -0.00292969 3.6522 0.0675956 3.52667 0.193131C3.46451 0.25529 3.4152 0.329084 3.38156 0.410299C3.34792 0.491513 3.33061 0.578559 3.33061 0.666465C3.33061 0.843999 3.40113 1.01426 3.52667 1.1398L5.72667 3.33313H0.666667C0.489856 3.33313 0.320287 3.40337 0.195262 3.52839C0.070238 3.65342 0 3.82299 0 3.9998C0 4.17661 0.070238 4.34618 0.195262 4.4712C0.320287 4.59623 0.489856 4.66646 0.666667 4.66646H5.72667L3.52667 6.8598C3.46418 6.92177 3.41459 6.99551 3.38074 7.07675C3.34689 7.15799 3.32947 7.24512 3.32947 7.33313C3.32947 7.42114 3.34689 7.50828 3.38074 7.58952C3.41459 7.67075 3.46418 7.74449 3.52667 7.80646C3.58864 7.86895 3.66238 7.91855 3.74362 7.95239C3.82486 7.98624 3.91199 8.00366 4 8.00366C4.08801 8.00366 4.17515 7.98624 4.25638 7.95239C4.33762 7.91855 4.41136 7.86895 4.47333 7.80646L7.80667 4.47313C7.86736 4.40973 7.91494 4.33497 7.94667 4.25313C8.01335 4.09082 8.01335 3.90877 7.94667 3.74646Z" fill="#0D99FF"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
  }


  export default StoriesSingleCard;