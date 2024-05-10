// import React from 'react';
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { useTypewriter } from 'react-simple-typewriter'
import './Banner.css'
const Banner = () => {
    // const{text}=useTypewriter({
    //     words:['Visit Vista'],
    //     looo:{}
    // })
    return (
        <div>

            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mt-2"
            >


                <SwiperSlide>
                    <div className="slide slide1  ">

                        <h2 className="absolute inset-x-0 text-2xl lg:text-5xl text-center top-28 lg:top-32 text-white font-bold  lg:font-extrabold font-popins">Welcome to UnityServe</h2>
                        <h2 className="absolute inset-x-0 text-center top-1/2 lg:top-48 text-white font-medium lg:text-2xl font-popins ">A person who voluntarily undertakes or expresses <br /> a willingness to undertake a service</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide slide2 ">
                        <h2 className="absolute inset-x-0 text-2xl lg:text-5xl text-center top-28 lg:top-32 text-white font-bold  lg:font-extrabold font-popins">Welcome to UnityServe</h2>
                        <h2 className="absolute inset-x-0 text-center top-1/2 lg:top-48 text-white font-medium lg:text-2xl font-popins">A person who voluntarily undertakes or expresses <br /> a willingness to undertake a service </h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide slide3">
                        <h2 className="absolute inset-x-0 text-2xl lg:text-5xl text-center top-28 lg:top-32 text-white font-bold  lg:font-extrabold font-popins">Welcome to UnityServe</h2>
                        <h2 className="absolute inset-x-0 text-center top-1/2 lg:top-48 text-white font-medium lg:text-2xl font-popins ">A person who voluntarily undertakes or expresses <br /> a willingness to undertake a service</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide4">
                        <h2 className="absolute inset-x-0 text-2xl lg:text-5xl text-center top-28 lg:top-32 text-white font-bold  lg:font-extrabold font-popins">Welcome to UnityServe</h2>
                        <h2 className="absolute inset-x-0 text-center top-1/2 lg:top-48 text-white font-medium lg:text-2xl font-popins ">A person who voluntarily undertakes or expresses <br /> a willingness to undertake a service</h2>
                    </div>
                </SwiperSlide>
                


            </Swiper>
        </div >
    );
};

export default Banner;