import RatingStar from "../SVGs/RatingSDtar";
import backgroundImage from '../../assets/Images/Ellipse 2363.png'






function ReviewCard() {
    return (
        <>
            <div className="flex items-center justify-center gap-[22px] flex-wrap ">
                <div className="w-[300px] rounded-[8px] px-[22px] py-[22px] border border-[#CECDD1] ">
                    <div className=" flex items-center gap-[5px] justify-center  ">
                        <RatingStar/>
                        <RatingStar/>
                        <RatingStar/>
                        <RatingStar/>
                        <RatingStar/>
                    </div>
                    <p className="text-[15px] text-[#0A0E19] text-center mt-[8px] ">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an known printer took a galley</p>
                    <div className="flex items-center justify-center mt-[10px] ">
                        <div className="flex items-center gap-[6px] ">
                            <div className="rounded-[50px] h-[50px] w-[50px] bg-cover bg-center bg-no-repeat " style={{backgroundImage : `url(${backgroundImage})`}} ></div>
                            <div className=" ">
                                <h2 className="text-[14px] font-[600] text-[#0A0E19] ">Lana Bernier</h2>
                                <p className="text-[#0A0E19] text-[11px] ">Senior Paradigm Strategist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default ReviewCard;