import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ProductCard from "./ProductCard";

function Similar({ data }) {
  console.log(data);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
        
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide key={item._id}>
          <ProductCard data={item}></ProductCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Similar;
