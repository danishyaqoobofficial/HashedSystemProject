

function HeaderliItem(props) {
    return (
        <>
            <span className=" capitalize text-[13px] lg:text-[14px] text-[#0D0A31] cursor-pointer font-[500] group Arimo ">
                {props.headerItem}
                <div className="rounded-[30px] bg-[#0D99FF] h-[3px] w-[0px] group-hover:w-full transition-all "></div>
            </span>
        </>
    );
  }
  
  export default HeaderliItem;