
import { Link } from 'react-router-dom';
import img from '../assets/Images/Mask group.png'

function Logo() {
    return (
        <>
                <Link to={`/`}>
                    <div className="flex items-center justify-center cursor-pointer ">
                        <img className="h-[50px] " src={img} alt="123456" />
                    </div>
                </Link>
        </>
    );
  }
  
  export default Logo;