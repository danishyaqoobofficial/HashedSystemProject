



function ServiceSingleCard(props) {
    return (
        <>
            <div className=" mt-[18px] w-full px-[18px] md:px-[32px] py-[9px] rounded-[20px] border-[0.7px] border-[#CECDD1] flex items-center bg-[#fff] gap-[12px] sm:gap-[18px] md:gap-[28px] overflow-auto sm:flex-row flex-col " data-aos={props.data} data-aos-duration="900" >
                <div className="flex items-center justify-start gap-[18px] md:gap-[28px] flex-1 full_width ">
                    <img className='max-h-[100px] max-w-[90px] ' src={props.image} alt="" />
                    <h3 className='text-start leading-6 text-[18px] flex-1 '>{props.title}</h3>
                </div>
                <div className="flex items-center gap-[18px] md:gap-[28px] flex-[3] ">
                    <p className='text-[14px] text-[#001436] text-start flex-[5] line-clamp-3 '>{props.peragraph}</p>
                    <div className='bg-[#ABDCFF] cursor-pointer rounded-[50px] p-[9px] flex items-center justify-center '>
                        <svg width="13" height="13" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.36797 9.41719V15.2332C9.36797 15.8992 8.82809 16.4391 8.16211 16.4391C7.49613 16.4391 6.95625 15.8992 6.95625 15.2332V9.41719H1.19766C0.536209 9.41719 0 8.88098 0 8.21953C0 7.55808 0.536209 7.02187 1.19766 7.02187H6.95625V1.20586C6.95625 0.539881 7.49613 0 8.16211 0C8.82809 0 9.36797 0.539882 9.36797 1.20586V7.02187H15.1266C15.788 7.02187 16.3242 7.55808 16.3242 8.21953C16.3242 8.88098 15.788 9.41719 15.1266 9.41719H9.36797Z" fill="#0D99FF"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default ServiceSingleCard;