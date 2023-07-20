import React, { useState } from "react";
import AboutItem from "../../components/AboutItem";
import Footer from "../../components/Footer";

import bg_service from "../../assets/imgs/bg-service.png";
import service_01 from "../../assets/imgs/gallery-01.jpg";
import service_02 from "../../assets/imgs/gallery-add.png";
import service_03 from "../../assets/imgs/gallery-03.jpg";
import service_04 from "../../assets/imgs/gallery-04.jpg";
import service_img_01 from "../../assets/imgs/service-01.png";
import service_img_02 from "../../assets/imgs/service-02.png";
import service_img_03 from "../../assets/imgs/service-03.png";
import Slogan from "../../components/Slogan";
import slogan_mask from "../../assets/imgs/bg_mask.png";

import service_slogan from "../../assets/imgs/service-slogan.png";
import play_btn from "../../assets/imgs/play_btn.svg";

const Services = () => {

    const container = "max-w-[1140px] mx-auto px-4";
    const title = "text-primary text-base font-semibold leading-[125%]";
    const heading = "text-subPrimary text-4xl font-semibold leading-[125%]";
    const desc = "text-desc text-base font-normal tracking-widest";
    const flexCenter = "flex justify-center items-center";

    const [icon, setIcon] = useState(true);

    const handleChevron = () => {
        setIcon(!icon);
    };

    return (
        <div className="relative">
            <div>
                <img
                    className="absolute top-[-90%] -z-50 w-full"
                    src={bg_service}
                    alt=""
                />
            </div>
            <div className={`${container} mt-[125px]`}>
                <div className="text-center">
                    <span className={`${title}`}>Our Services</span>
                    <h2 className={`${heading}`}>We focus on your beauty</h2>
                    <p className={`${desc}`}>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex gap-[84px] mt-[70px] flex-wrap items-center justify-center">
                    <img
                        className="w-[291px] h-[254] rounded-[25px] object-cover"
                        src={service_01}
                        alt=""
                    />
                    <img
                        className="w-[725px] h-[254px] rounded-[25px] object-cover"
                        src={service_02}
                        alt=""
                    />
                </div>
                <div className="flex gap-[84px] mt-[68px] flex-wrap items-center justify-center" >
                    <img
                        className="w-[725px] h-[254px] rounded-[25px] object-cover"
                        src={service_03}
                        alt=""
                    />
                    <img
                        className="w-[291px] h-[254px] rounded-[25px] object-cover"
                        src={service_04}
                        alt=""
                    />
                </div>
            </div>

            <AboutItem
                title="Beauty Consultation"
                heading="We services beauty consultation"
                desc_01="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
                img={service_img_01}
            >
                <div className="flex gap-1 items-center">
                    <span className="text-subPrimary text-base font-semibold tracking-widest">
                        Make an Appointment
                    </span>
                    <i class="fa-solid fa-angles-right"></i>
                </div>
            </AboutItem>

            <AboutItem
                title="Skin Treatements"
                heading="Skin care and treatment by expert"
                desc_01="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
                img={service_img_02}
                className="flex-row-reverse"
            >
                <div className="flex gap-1 items-center">
                    <span className="text-subPrimary text-base font-semibold tracking-widest">
                        Make an Appointment
                    </span>
                    <i class="fa-solid fa-angles-right"></i>
                </div>
            </AboutItem>

            <AboutItem
                title="Skin Treatements"
                heading="Skin care and treatment by expert"
                desc_01="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
                img={service_img_03}
            >
                <div className="flex gap-1 items-center">
                    <span className="text-subPrimary text-base font-semibold tracking-widest">
                        Make an Appointment
                    </span>
                    <i class="fa-solid fa-angles-right"></i>
                </div>
            </AboutItem>

            <Slogan
                backgroundImage={service_slogan}
                imgMask={slogan_mask}
                className={`${flexCenter} h-[529px] text-white mt-[160px]`}
            >
                <div className="flex items-center gap-[188px]">
                    <div>
                        <h2 className="text-4xl font-semibold leading-[125%] max-w-[600px] xl:text-xl ">
                            Best responsibility and service for our customers
                        </h2>
                        <p className="text-base text-[#CACACA] font-normal tracking-widest max-w-[555px] mt-3 xl:text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                            <img
                                className="cursor-pointer"
                                src={play_btn}
                                alt=""
                            />
                        </div>
                        <span className="text-base font-semibold tracking-widest">
                            Treatments Videos
                        </span>
                    </div>
                </div>
            </Slogan>

            <div className={`${container} mt-[116px] `}>
                <div>
                    <p className={`${heading} text-center`}>Services FAQ’s</p>
                    <span className="block w-[40px] h-[5px] bg-primary rounded-[5px] mx-auto mt-[21px]"></span>
                    <div>
                        <div className="flex justify-between items-center mt-[68px] px-[35px]">
                            <p className="text-[#091156] font-semibold text-base tracking-widest">
                                Is beauty consultation handled thoroughly?
                            </p>
                            <span>
                                {icon ? (
                                    <i
                                        class="fa-solid fa-chevron-up text-subPrimary"
                                        onClick={handleChevron}
                                    ></i>
                                ) : (
                                    <i
                                        class="fa-solid fa-chevron-down text-subPrimary"
                                        onClick={handleChevron}
                                    ></i>
                                )}
                            </span>
                        </div>
                        {icon ? (
                            <div className="w-full h-[216px] bg-[#F6F7FF] rounded-b-[20px] mt-4 border-t-[1px] border-subPrimary">
                                <p className={`${desc} p-[53px]`}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit amet
                                    luctus venenatis, lectus magna fringilla
                                    urna
                                    <br />
                                    <br />
                                    porttitor rhoncus dolor purus non enim
                                    praesent elementum facilisis leo, vel
                                    fringilla est ullamcorper eget nulla
                                </p>
                            </div>
                        ) : (
                            ""
                        )}

                        <div className="flex justify-between items-center mt-[28px] px-[35px]">
                            <p className="text-[#091156] font-semibold text-base tracking-widest">
                                Can I be beautiful in an instant time?
                            </p>
                            <span>
                                <i
                                    class="fa-solid fa-chevron-down text-subPrimary"
                                    onClick={handleChevron}
                                ></i>
                            </span>
                        </div>

                        <div className="flex justify-between items-center mt-[28px] px-[35px]">
                            <p className="text-[#091156] font-semibold text-base tracking-widest">
                                Are there any side effects to the treatment
                                methods or treatments at this clinic?
                            </p>
                            <span>
                                <i
                                    class="fa-solid fa-chevron-down text-subPrimary"
                                    onClick={handleChevron}
                                ></i>
                            </span>
                        </div>

                        <div className="flex justify-between items-center mt-[28px] px-[35px]">
                            <p className="text-[#091156] font-semibold text-base tracking-widest">
                                Do professionals have accreditation in their
                                respective fields?
                            </p>
                            <span>
                                <i
                                    class="fa-solid fa-chevron-down text-subPrimary"
                                    onClick={handleChevron}
                                ></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
