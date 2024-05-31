


function Textarea() {
    return (
        <>
            <div className="flex-1 ">
                <label className="text-[#0A0E19] text-[15px] font-[300] whitespace-nowrap" htmlFor="textarea">Your Message *</label>
                <textarea className=" resize-none w-full border-[1px] rounded-[5px] outline-none text-[#1E2549] text-[14px] p-[11px] border-[#CECDD1] mt-[3px] " name="" id="textarea" cols="30" rows="10" placeholder="Your Message" ></textarea>
            </div>
        </>
    );
  }
  
  export default Textarea;


