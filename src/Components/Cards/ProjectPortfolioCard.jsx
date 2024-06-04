



function ProjectPortfolioCard(props) {
    return (
        <>
            <div className={`flex-1 px-[80px] pt-[120px] rounded-[20px] overflow-hidden flex justify-center ${props.green? 'bg-[#DFF9E6] ' : 'bg-[#DBD2FF]' } `}>
                <img className=" h-[320px] " src={props.image} alt="" />
            </div>
        </>
    );
  }
  
  export default ProjectPortfolioCard;