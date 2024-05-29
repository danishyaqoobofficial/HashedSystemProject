


function ServiceSmallCard(props) {
    return (
        <>
            <div className="bg-[#E8F0FA] rounded-[6px] flex items-center gap-[7px] px-[16px] py-[12px] transition-all hover:bg-[#0D99FF] cursor-default group justify-center ">
                <div className="h-[22px] w-[22px] flex items-center justify-center ">
                    <svg className="h-full w-full group-hover:stroke-[#fff] " viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 18V4C0.25 3.00544 0.645088 2.05161 1.34835 1.34835C2.05161 0.645088 3.00544 0.25 4 0.25H20C20.9946 0.25 21.9484 0.645088 22.6517 1.34835C23.3549 2.05161 23.75 3.00544 23.75 4V18C23.75 18.9946 23.3549 19.9484 22.6517 20.6517C21.9484 21.3549 20.9946 21.75 20 21.75H4C3.0056 21.7495 2.05208 21.3542 1.34893 20.6511C0.645788 19.9479 0.25053 18.9944 0.25 18ZM1.75 7.75V18C1.75 18.5967 1.98705 19.169 2.40901 19.591C2.83097 20.0129 3.40326 20.25 4 20.25H20C20.5967 20.25 21.169 20.0129 21.591 19.591C22.0129 19.169 22.25 18.5967 22.25 18V7.75H1.75ZM11 3C10.7348 3 10.4804 3.10536 10.2929 3.29289C10.1054 3.48043 10 3.73478 10 4C10 4.26522 10.1054 4.51957 10.2929 4.70711C10.4804 4.89464 10.7348 5 11 5C11.2652 5 11.5196 4.89464 11.7071 4.70711C11.8946 4.51957 12 4.26522 12 4C12 3.73478 11.8946 3.48043 11.7071 3.29289C11.5196 3.10536 11.2652 3 11 3ZM8 3C7.73478 3 7.48043 3.10536 7.29289 3.29289C7.10536 3.48043 7 3.73478 7 4C7 4.26522 7.10536 4.51957 7.29289 4.70711C7.48043 4.89464 7.73478 5 8 5C8.26522 5 8.51957 4.89464 8.70711 4.70711C8.89464 4.51957 9 4.26522 9 4C9 3.73478 8.89464 3.48043 8.70711 3.29289C8.51957 3.10536 8.26522 3 8 3ZM5 3C4.73478 3 4.48043 3.10536 4.29289 3.29289C4.10536 3.48043 4 3.73478 4 4C4 4.26522 4.10536 4.51957 4.29289 4.70711C4.48043 4.89464 4.73478 5 5 5C5.26522 5 5.51957 4.89464 5.70711 4.70711C5.89464 4.51957 6 4.26522 6 4C6 3.73478 5.89464 3.48043 5.70711 3.29289C5.51957 3.10536 5.26522 3 5 3Z" fill="#0D99FF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 15.25C8.88143 15.2504 9.01165 15.2248 9.13315 15.1747C9.25466 15.1246 9.36505 15.0509 9.45799 14.958C9.55093 14.8651 9.62457 14.7547 9.67469 14.6332C9.7248 14.5116 9.7504 14.3814 9.75 14.25V12C9.75 11.8011 9.82902 11.6103 9.96967 11.4697C10.1103 11.329 10.3011 11.25 10.5 11.25C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25C11.25 14.913 10.9866 15.5489 10.5178 16.0178C10.0489 16.4866 9.41304 16.75 8.75 16.75C8.08696 16.75 7.45107 16.4866 6.98223 16.0178C6.51339 15.5489 6.25 14.913 6.25 14.25V12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697C6.61032 11.329 6.80109 11.25 7 11.25C7.19891 11.25 7.38968 11.329 7.53033 11.4697C7.67098 11.6103 7.75 11.8011 7.75 12V14.25C7.7496 14.3814 7.7752 14.5116 7.82531 14.6332C7.87543 14.7547 7.94907 14.8651 8.04201 14.958C8.13495 15.0509 8.24534 15.1246 8.36685 15.1747C8.48835 15.2248 8.61857 15.2504 8.75 15.25ZM12.47 12.53C12.4004 12.4604 12.3452 12.3778 12.3075 12.2868C12.2699 12.1959 12.2505 12.0984 12.2505 12C12.2505 11.9016 12.2699 11.8041 12.3075 11.7132C12.3452 11.6222 12.4004 11.5396 12.47 11.47C12.5396 11.4004 12.6222 11.3452 12.7132 11.3075C12.8041 11.2699 12.9016 11.2505 13 11.2505C13.0984 11.2505 13.1959 11.2699 13.2868 11.3075C13.3778 11.3452 13.4604 11.4004 13.53 11.47L17.53 15.47C17.5996 15.5396 17.6548 15.6222 17.6925 15.7132C17.7301 15.8041 17.7495 15.9016 17.7495 16C17.7495 16.0984 17.7301 16.1959 17.6925 16.2868C17.6548 16.3778 17.5996 16.4604 17.53 16.53C17.4604 16.5996 17.3778 16.6548 17.2868 16.6925C17.1959 16.7301 17.0984 16.7495 17 16.7495C16.9016 16.7495 16.8041 16.7301 16.7132 16.6925C16.6222 16.6548 16.5396 16.5996 16.47 16.53L12.47 12.53Z" fill="#0D99FF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.47 11.4695C16.5396 11.3999 16.6222 11.3447 16.7132 11.3071C16.8041 11.2694 16.9016 11.25 17 11.25C17.0985 11.25 17.1959 11.2694 17.2869 11.3071C17.3778 11.3447 17.4604 11.3999 17.53 11.4695C17.5996 11.5391 17.6548 11.6218 17.6925 11.7127C17.7302 11.8036 17.7496 11.9011 17.7496 11.9995C17.7496 12.098 17.7302 12.1954 17.6925 12.2864C17.6548 12.3773 17.5996 12.4599 17.53 12.5295L13.53 16.5295C13.4604 16.5991 13.3778 16.6543 13.2869 16.692C13.1959 16.7297 13.0985 16.7491 13 16.7491C12.9016 16.7491 12.8041 16.7297 12.7132 16.692C12.6223 16.6543 12.5396 16.5991 12.47 16.5295C12.4004 16.4599 12.3452 16.3773 12.3075 16.2864C12.2699 16.1954 12.2505 16.098 12.2505 15.9995C12.2505 15.9011 12.2699 15.8036 12.3075 15.7127C12.3452 15.6218 12.4004 15.5391 12.47 15.4695L16.47 11.4695Z" fill="#0D99FF"/>
                    </svg>
                </div>
                <p className="text-[#001436] text-[16px] font-[600] group-hover:text-[#FFFFFF] whitespace-nowrap ">{props.heading}</p>
            </div>
        </>
    );
  }
  
  export default ServiceSmallCard;