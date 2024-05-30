import backgroundImage from '../../assets/Images/Ellipse 2363.png'



function BlogCard(props) {
    return (
        <>
            <div className="mr-[12px] w-full ">
                <div className="w-full h-[260px] bg-cover bg-no-repeat bg-center rounded-[20px] " style={{backgroundImage : `url(${props.bg})`}}  ></div>
                <div className="flex items-center mt-[12px] justify-between ">
                    <div className='text-[#0D99FF] text-[11px] font-[500] bg-[#DDF0FF] rounded-[30px] px-[11px] py-[4px] '>
                        Services
                    </div>
                    <p className="text-[#0D99FF] text-[11px] font-[500]">{props.date}</p>
                </div>
                <h2 className="text-[21px] text-[#0A0E19] font-[600] mt-[5px] ">{props.heading}</h2>
                <p className="text-[12px] text-[#0A0E19] mt-[5px] ">{props.peragraph}</p>
                <div className="flex items-center gap-[6px] mt-[12px] ">
                    <div className="rounded-[50px] h-[42px] w-[42px] bg-cover bg-center bg-no-repeat " style={{backgroundImage : `url(${backgroundImage})`}} ></div>
                    <div className=" ">
                        <h2 className="text-[13px] font-[600] text-[#0A0E19] ">Lana Bernier</h2>
                        <p className="text-[#0A0E19] text-[10px] ">Senior Paradigm Strategist</p>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default BlogCard;