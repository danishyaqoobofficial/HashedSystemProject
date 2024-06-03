import backgroundImage from '../assets/Images/Ellipse 2363.png'
import backgroundImage1 from '../assets/Images/trade.png'
import bg from '../assets/Images/bg.png'
import bg1 from '../assets/Images/bg1.png'





function BlogDetails() {
    return (
        <>
            <main className=" w-full bg-[#fff] ">
                <main className="max-w-[1000px] mx-auto px-[15px] md:px-[20px] py-[52px] ">
                    <p className=" text-center text-[18px] font-[300] text-[#0D99FF] ">Blog Details</p>
                    <h2 className="text-center text-[#0A0E19] font-[600] mt-[20px] leading-[32px] sm:leading-[50px] text-[22px] sm:text-[30px] md:text-[42px]  ">The High Demand for Django Developers in Dubai: Harnessing the Power of Web Development</h2>
                    <div className=" border-t border-[#99A1A5] py-[13px] mt-[22px] flex items-center justify-between gap-[22px] flex-wrap ">
                        <div className="flex items-center gap-[6px]">
                            <div className="rounded-[50px] h-[42px] w-[42px] bg-cover bg-center bg-no-repeat " style={{backgroundImage : `url(${backgroundImage})`}} ></div>
                            <div className=" ">
                                <h2 className="text-[13px] font-[600] text-[#0A0E19] ">Lana Bernier</h2>
                                <p className="text-[#0A0E19] text-[10px] ">Senior Paradigm Strategist</p>
                            </div>
                        </div>
                        <div className=' flex items-center gap-[15px] flex-row-reverse '>
                            <span className='rounded-[30px] bg-[#DDF0FF] px-[16px] py-[4px] flex items-center justify-center text-[#0D99FF] text-[11px] font-[500] ' >
                                Services
                            </span>
                            <p className='text-[#0D99FF] text-[11px] font-[500] whitespace-nowrap '>21 May 2024</p>
                        </div>
                    </div>
                    <div className='h-[500px] w-full rounded-[20px] bg-cover bg-no-repeat bg-center ' style={{backgroundImage : `url(${backgroundImage1})` }} ></div>
                    <p className='mt-[32px] text-[13px] text-[#0A0E19] font-[400] '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    <div className='mt-[32px] '>
                        <h2 className='text-[22px] text-[#0A0E19] font-[600] '>Concierge Bookings</h2>
                        <p className='mt-[7px] text-[13px] text-[#0A0E19] font-[400] '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    </div>
                    <div className='mt-[32px] '>
                        <div className='mt-[16px] '>
                            <div className='flex items-center gap-[8px] mt-[8px] '>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5308 13.2505C9.48187 12.1398 10.3883 11.0359 11.3445 9.97583C13.457 7.63421 15.7479 5.48658 18.3265 3.65483C18.7642 3.3441 19.2029 3.1587 19.7513 3.20676C20.2054 3.24625 20.6681 3.19045 21.1222 3.22822C21.2913 3.24196 21.5342 3.36642 21.5857 3.50032C21.6372 3.63595 21.5462 3.90204 21.4269 4.01534C16.4475 8.74236 12.7857 14.4556 9.2544 20.2668C9.20204 20.3526 9.15397 20.4393 9.10161 20.5251C8.80805 21.0032 8.51363 21.0007 8.20462 20.5354C7.15313 18.9526 6.11021 17.3638 5.03554 15.7964C4.24327 14.6419 3.41409 13.5123 2.58491 12.3835C2.33856 12.0479 2.31967 11.7861 2.64585 11.4943C2.99692 11.1801 3.33254 10.8454 3.65185 10.4986C3.93082 10.1947 4.18404 10.2033 4.50936 10.4342C5.83725 11.3775 7.17802 12.3037 8.5308 13.2488V13.2505Z" fill="#0D99FF"/>
                                </svg>
                                <p className='text-[13px] text-[#0A0E19] line-clamp-1  '>Lorem Ipsum is simply dummy text of the printing</p>
                            </div>
                            <div className='flex items-center gap-[8px] mt-[8px] '>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5308 13.2505C9.48187 12.1398 10.3883 11.0359 11.3445 9.97583C13.457 7.63421 15.7479 5.48658 18.3265 3.65483C18.7642 3.3441 19.2029 3.1587 19.7513 3.20676C20.2054 3.24625 20.6681 3.19045 21.1222 3.22822C21.2913 3.24196 21.5342 3.36642 21.5857 3.50032C21.6372 3.63595 21.5462 3.90204 21.4269 4.01534C16.4475 8.74236 12.7857 14.4556 9.2544 20.2668C9.20204 20.3526 9.15397 20.4393 9.10161 20.5251C8.80805 21.0032 8.51363 21.0007 8.20462 20.5354C7.15313 18.9526 6.11021 17.3638 5.03554 15.7964C4.24327 14.6419 3.41409 13.5123 2.58491 12.3835C2.33856 12.0479 2.31967 11.7861 2.64585 11.4943C2.99692 11.1801 3.33254 10.8454 3.65185 10.4986C3.93082 10.1947 4.18404 10.2033 4.50936 10.4342C5.83725 11.3775 7.17802 12.3037 8.5308 13.2488V13.2505Z" fill="#0D99FF"/>
                                </svg>
                                <p className='text-[13px] text-[#0A0E19] line-clamp-1  '>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                            </div>
                            <div className='flex items-center gap-[8px] mt-[8px] '>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5308 13.2505C9.48187 12.1398 10.3883 11.0359 11.3445 9.97583C13.457 7.63421 15.7479 5.48658 18.3265 3.65483C18.7642 3.3441 19.2029 3.1587 19.7513 3.20676C20.2054 3.24625 20.6681 3.19045 21.1222 3.22822C21.2913 3.24196 21.5342 3.36642 21.5857 3.50032C21.6372 3.63595 21.5462 3.90204 21.4269 4.01534C16.4475 8.74236 12.7857 14.4556 9.2544 20.2668C9.20204 20.3526 9.15397 20.4393 9.10161 20.5251C8.80805 21.0032 8.51363 21.0007 8.20462 20.5354C7.15313 18.9526 6.11021 17.3638 5.03554 15.7964C4.24327 14.6419 3.41409 13.5123 2.58491 12.3835C2.33856 12.0479 2.31967 11.7861 2.64585 11.4943C2.99692 11.1801 3.33254 10.8454 3.65185 10.4986C3.93082 10.1947 4.18404 10.2033 4.50936 10.4342C5.83725 11.3775 7.17802 12.3037 8.5308 13.2488V13.2505Z" fill="#0D99FF"/>
                                </svg>
                                <p className='text-[13px] text-[#0A0E19] line-clamp-1 '>Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam es</p>
                            </div>
                            <div className='flex items-center gap-[8px] mt-[8px] '>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5308 13.2505C9.48187 12.1398 10.3883 11.0359 11.3445 9.97583C13.457 7.63421 15.7479 5.48658 18.3265 3.65483C18.7642 3.3441 19.2029 3.1587 19.7513 3.20676C20.2054 3.24625 20.6681 3.19045 21.1222 3.22822C21.2913 3.24196 21.5342 3.36642 21.5857 3.50032C21.6372 3.63595 21.5462 3.90204 21.4269 4.01534C16.4475 8.74236 12.7857 14.4556 9.2544 20.2668C9.20204 20.3526 9.15397 20.4393 9.10161 20.5251C8.80805 21.0032 8.51363 21.0007 8.20462 20.5354C7.15313 18.9526 6.11021 17.3638 5.03554 15.7964C4.24327 14.6419 3.41409 13.5123 2.58491 12.3835C2.33856 12.0479 2.31967 11.7861 2.64585 11.4943C2.99692 11.1801 3.33254 10.8454 3.65185 10.4986C3.93082 10.1947 4.18404 10.2033 4.50936 10.4342C5.83725 11.3775 7.17802 12.3037 8.5308 13.2488V13.2505Z" fill="#0D99FF"/>
                                </svg>
                                <p className='text-[13px] text-[#0A0E19] line-clamp-1 '>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
                            </div>
                            <div className='flex items-center gap-[8px] mt-[8px] '>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5308 13.2505C9.48187 12.1398 10.3883 11.0359 11.3445 9.97583C13.457 7.63421 15.7479 5.48658 18.3265 3.65483C18.7642 3.3441 19.2029 3.1587 19.7513 3.20676C20.2054 3.24625 20.6681 3.19045 21.1222 3.22822C21.2913 3.24196 21.5342 3.36642 21.5857 3.50032C21.6372 3.63595 21.5462 3.90204 21.4269 4.01534C16.4475 8.74236 12.7857 14.4556 9.2544 20.2668C9.20204 20.3526 9.15397 20.4393 9.10161 20.5251C8.80805 21.0032 8.51363 21.0007 8.20462 20.5354C7.15313 18.9526 6.11021 17.3638 5.03554 15.7964C4.24327 14.6419 3.41409 13.5123 2.58491 12.3835C2.33856 12.0479 2.31967 11.7861 2.64585 11.4943C2.99692 11.1801 3.33254 10.8454 3.65185 10.4986C3.93082 10.1947 4.18404 10.2033 4.50936 10.4342C5.83725 11.3775 7.17802 12.3037 8.5308 13.2488V13.2505Z" fill="#0D99FF"/>
                                </svg>
                                <p className='text-[13px] text-[#0A0E19] line-clamp-1 '>Nnisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-[22px] py-[32px] flex-col sm:flex-row '>
                        <div className='h-[280px] sm:h-[320px] w-full sm:flex-1 bg-cover bg-no-repeat bg-center rounded-[20px] ' style={{backgroundImage : `url(${bg})`}} ></div>
                        <div className='h-[280px] sm:h-[320px] w-full sm:flex-1 bg-cover bg-no-repeat bg-center rounded-[20px] ' style={{backgroundImage : `url(${bg1})`}} ></div>
                    </div>
                    <p className='mt-[32px] text-[13px] text-[#0A0E19] font-[400] '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    <p className='mt-[32px] text-[13px] text-[#0A0E19] font-[400] '> sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    <div className='mt-[32px] '>
                        <h2 className='text-[22px] font-[600] text-[#0A0E19] '>Concierge Bookings</h2>
                        <div className='flex items-center gap-[9px] mt-[14px] '>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.96283 20.4476C7.3282 19.731 7.34878 18.5915 8.0088 17.9025L13.9501 12L8.00879 6.0975C7.34878 5.40847 7.3282 4.269 7.96283 3.55241C8.59746 2.83582 9.64698 2.81348 10.307 3.5025L17.4912 10.7025C17.8163 11.0419 18 11.5104 18 12C18 12.4896 17.8163 12.9581 17.4912 13.2975L10.307 20.4975C9.64698 21.1865 8.59746 21.1642 7.96283 20.4476Z" fill="#0D99FF"/>
                            </svg>
                            <p className='text-[13px] text-[#0A0E19] '>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        <div className='flex items-center gap-[9px] mt-[14px] '>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.96283 20.4476C7.3282 19.731 7.34878 18.5915 8.0088 17.9025L13.9501 12L8.00879 6.0975C7.34878 5.40847 7.3282 4.269 7.96283 3.55241C8.59746 2.83582 9.64698 2.81348 10.307 3.5025L17.4912 10.7025C17.8163 11.0419 18 11.5104 18 12C18 12.4896 17.8163 12.9581 17.4912 13.2975L10.307 20.4975C9.64698 21.1865 8.59746 21.1642 7.96283 20.4476Z" fill="#0D99FF"/>
                            </svg>
                            <p className='text-[13px] text-[#0A0E19] '>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                        </div>
                    </div>
                    <div className='mt-[32px] '>
                        <h2 className='text-[#0D99FF] text-[16px] font-[600] '>Concierge Bookings</h2>
                        <p className='mt-[8px] text-[13px] text-[#0A0E19] font-[400] '> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    </div>
                    <div className='mt-[32px] '>
                        <h2 className='text-[#0D99FF] text-[16px] font-[600] '>Concierge Bookings</h2>
                        <p className='mt-[8px] text-[13px] text-[#0A0E19] font-[400] '> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    </div>
                    <div className='mt-[32px] '>
                        <h2 className='text-[#0D99FF] text-[16px] font-[600] '>Concierge Bookings</h2>
                        <p className='mt-[8px] text-[13px] text-[#0A0E19] font-[400] '> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    </div>
                    <p className='mt-[32px] text-[13px] text-[#0A0E19] font-[400] '> ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </main>
            </main>
        </>
    );
  }
  
  export default BlogDetails;