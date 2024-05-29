




function FormLableInput(props) {
    return (
        <>
            <div className="flex-1 w-full ">
                <label className="text-[#0A0E19] text-[15px] font-[300] whitespace-nowrap " htmlFor={props.htmlFor}>{props.lable}</label>
                <input className="w-full border-[1px] rounded-[5px] outline-none text-[#1E2549] text-[14px] p-[11px] border-[#CECDD1] mt-[3px] " type={props.type} placeholder={props.placeholder} id={props.id} />
            </div>
        </>
    );
  }
  
  export default FormLableInput;