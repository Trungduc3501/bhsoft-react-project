import React from "react";
import avatar_01 from "../assets/imgs/avatar_01.jpg";
import avatar_02 from "../assets/imgs/avatar_02.jpg";
import avatar_03 from "../assets/imgs/avatar_03.jpg";
import doctor from '../assets/imgs/doctor.png'
import doctor2 from '../assets/imgs/doctor2.png'
import doctor3 from '../assets/imgs/doctor3.png'

const Team = () => {

    return (
        <div className="max-w-[1140px] mx-auto px-4">
            <div className=" text-center mt-[142px]">
                <span className="text-base text-[#FF64AE] font-semibold leading-[125%]">
                    Professional Teams
                </span>
                <h2 className="text-[#091156] text-[36px] font-semibold leading-[125%] mt-[9px]">
                    The Professional expert
                </h2>
                <p className="text-base text-[#8B8B8B] font-normal tracking-widest mt-[21px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-0 mt-[87px]">
                <div className="hover:bg-white text-center hover:shadow-[0px_25px_50px_25px_#F6F7FF] ease-in-out duration-300 rounded-[42px] ">
                    <img
                        className="w-[146px] h-[146px] rounded-full object-cover mx-auto mt-[91px]"
                        src={doctor}
                        alt=""
                    />
                    <span className="text-base text-[#FF64AE] font-semibold leading-[125%] mt-14 block">
                        Surgeon
                    </span>
                    <p className="text-[18px] text-[#091156] font-semibold leading-[125%] mt-[15px]">
                        Briyan Nevalli
                    </p>
                    <p className="text-[#8B8B8B] text-[14px] font-normal tracking-[1.4px] mt-[20px] md:max-w-[270px] mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit
                    </p>
                    <div className="flex justify-center items-center gap-[34px] mt-[50px] pb-[96px]">
                        <span className="text-[25px] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-[-2px_6px_16px_-1px_#E6E9FD]">
                            <i className="fa-brands fa-twitter"></i>
                        </span>
                        <span className="text-[25px] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-[-2px_6px_16px_-1px_#E6E9FD]">
                            <i className="fa-brands fa-facebook-f"></i>
                        </span>
                        <span className="text-[25px] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-[-2px_6px_16px_-1px_#E6E9FD]">
                            <i className="fa-brands fa-instagram"></i>
                        </span>
                    </div>
                </div>

                <div className="hover:bg-white text-center hover:shadow-[0px_25px_50px_25px_#F6F7FF] ease-in-out duration-300 rounded-[42px]">
                    <img
                        className="w-[146px] h-[146px] rounded-full object-cover mx-auto mt-[91px]"
                        src={doctor2}
                        alt=""
                    />
                    <span className="text-base text-[#FF64AE] font-semibold leading-[125%] mt-14 block">
                        Surgeon
                    </span>
                    <p className="text-[18px] text-[#091156] font-semibold leading-[125%] mt-[15px]">
                        Briyan Nevalli
                    </p>
                    <p className="text-[#8B8B8B] text-[14px] font-normal tracking-[1.4px] mt-[20px] md:max-w-[270px] mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit
                    </p>
                    <div className="flex justify-center items-center gap-[34px] mt-[50px] pb-[96px]">
                        <span className="text-[25px] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-[-2px_6px_16px_-1px_#E6E9FD]">
                            <i className="fa-brands fa-twitter"></i>
                        </span>
                        <span className="text-[25px] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-[-2px_6px_16px_-1px_#E6E9FD]">
                            <i className="fa-brands fa-facebook-f"></i>
                        </span>
                        <span className="text-[25px] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-[-2px_6px_16px_-1px_#E6E9FD]">
                            <i className="fa-brands fa-instagram"></i>
                        </span>
                    </div>
                </div>

                <div className="hover:bg-white text-center hover:shadow-[0px_25px_50px_25px_#F6F7FF] ease-in-out duration-300 rounded-[42px]">
                    <img
                        className="w-[146px] h-[146px] rounded-full object-cover mx-auto mt-[91px]"
                        src={doctor3}
                        alt=""
                    />
                    <span className="text-base text-[#FF64AE] font-semibold leading-[125%] mt-14 block">
                        Surgeon
                    </span>
                    <p className="text-[18px] text-[#091156] font-semibold leading-[125%] mt-[15px]">
                        Briyan Nevalli
                    </p>
                    <p className="text-[#8B8B8B] text-[14px] font-normal tracking-[1.4px] mt-[20px] md:max-w-[270px] mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit
                    </p>
                    <div className="flex justify-center items-center gap-[34px] mt-[50px] pb-[96px]">
                        <span className="text-[25px] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-[-2px_6px_16px_-1px_#E6E9FD]">
                            <i className="fa-brands fa-twitter"></i>
                        </span>
                        <span className="text-[25px] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-[-2px_6px_16px_-1px_#E6E9FD]">
                            <i className="fa-brands fa-facebook-f"></i>
                        </span>
                        <span className="text-[25px] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-[-2px_6px_16px_-1px_#E6E9FD]">
                            <i className="fa-brands fa-instagram"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
