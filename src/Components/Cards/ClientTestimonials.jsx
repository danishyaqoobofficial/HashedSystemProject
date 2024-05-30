


function ClientTesrimonials(props) {
    return (
        <>
            <div className= " max-w-[1100px] mx-auto bg-[#11335A] rounded-[20px] px-[38px] md:px-[62px] py-[30px] md:py-[46px] flex gap-[42px] md:flex-row flex-col md:items-start items-center " >
                <div className="rounded-[50px] h-[220px] w-[220px] bg-cover bg-no-repeat bg-center " style={{backgroundImage : `url(${props.bgImage})` }} ></div>
                <div className="flex-1 ">
                    <img className="h-[23px] " src={props.titleImage} alt="" />
                    <p className="text-[#FFFFFF] text-[18px] mt-[22px] line-clamp-4 " >Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since, when an known printer took a galley of type .</p>
                    <div className="mt-[16px] " >
                        <h2 className="text-[14px] font-[600] text-[#fff] ">Lana Bernier</h2>
                        <p className="text-[10px] font-[300] text-[#ffffffc6] ">Senior Paradigm Strategist</p>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default ClientTesrimonials;