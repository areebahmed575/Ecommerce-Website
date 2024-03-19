"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CardT from "./CardT";
import { IProduct } from '../page';
import { oneProductType } from "./utlis/productDataAndTypes";
const SwiperComp: FC<{ ProductData: Array<IProduct > }> = ({
    ProductData,
  }) => {
  
    let dataToItrate = ProductData.slice(2, 10);

    return (
        <div className="space-y-4 px-6 mt-24">
          <div className="text-center space-y-3">
            <h3 className="text-xs font-bold tracking-widest text-center text-[#0062f5] ">
            PROMOTIONS
            </h3>
            <h3 className="text-center text-3xl font-bold tracking-wider">
            Our Promotions Events
            </h3>
          </div>
    
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={0}
            breakpoints={{
              250: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            centeredSlides={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {dataToItrate.map((item:oneProductType, index: number) => (
              <SwiperSlide key={index}>
                <CardT singleProductData={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    };
    
    export default SwiperComp;