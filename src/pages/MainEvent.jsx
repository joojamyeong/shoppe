import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";

import { Pagination } from "swiper";

function MainEvent() {
  return (
    <section className="mainEvent mw">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mainSwiper mySwiper"
      >
        <SwiperSlide>
          <div className="eventList">
            <img
              src={`${process.env.PUBLIC_URL}/img/Img_bg1.jpg`}
              alt="event01"
            />
            <div className="eventInfo">
              <p>상품 이름 영역</p>
              <button>구매하기</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="eventList">
            <img
              src={`${process.env.PUBLIC_URL}/img/img_bg2.jpg`}
              alt="event02"
            />
            <div className="eventInfo">
              <p>상품 이름 영역</p>
              <button>구매하기</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="eventList">
            <img
              src={`${process.env.PUBLIC_URL}/img/img_bg3.jpg`}
              alt="event03"
            />
            <div className="eventInfo">
              <p>상품 이름 영역</p>
              <button>구매하기</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MainEvent;
