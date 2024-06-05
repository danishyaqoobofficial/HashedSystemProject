import OpenCloseCard from "../Components/Cards/OpenCloseCard";




function CookiesPolicies() {
    return (
        <>
            <main className="w-full bg-[#fff] ">
                <section className="max-w-[1200px] mx-auto px-[15px] md:px-[20px] py-[72px] ">
                    <h2 className="text-center text-[#0A0E19] font-[600] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">Cookie Policy</h2>
                    <div className="mt-[52px] ">
                        <OpenCloseCard/>
                    </div>
                </section>
            </main>
        </>
    );
  }
  
  export default CookiesPolicies;