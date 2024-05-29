import Logo from "../Logo";
import Hamburger from "../SVGs/Hamburger";
import HeaderliItem from "./HeaderLiItem";


function Header() {
    return (
        <>
            <header className=" bg-[#E8F0FA] w-full ">
                <div className="flex items-center max-w-[1200px] mx-auto py-[11px] justify-between px-[12px] sm:px-[20px] ">
                    <Logo/>
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-[28px] lg:gap-[44px] ">
                            <HeaderliItem headerItem = 'home'/>
                            <HeaderliItem headerItem = 'About Us'/>
                            <HeaderliItem headerItem = 'Services'/>
                            <HeaderliItem headerItem = 'portfolio'/>
                            <HeaderliItem headerItem = 'Blogs'/>
                            <HeaderliItem headerItem = 'Contact Us'/>
                            <div className="flex items-center justify-center px-[22px] py-[9px] bg-[#0D99FF] rounded-[7px] text-[14px] lg:text-[15px] text-[#fff] cursor-pointer select-none font-[400] ">
                                Get Quotes
                            </div>
                        </div>
                    </div>
                    <div className="block lg:hidden">
                        <span className="flex items-center justify-center px-[6px] cursor-pointer ">
                            <Hamburger/>
                        </span>
                    </div>
                </div>
            </header>
        </>
    );
  }
  
  export default Header;