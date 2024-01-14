import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Grid } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import pricesData from "../../../commons/constants/priceItems";
import PriceCard from "./PriceCard";

function PriceCardCarousel() {
  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            },
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 500,
              modifier: 0.3,
              slideShadows: true,
            },
          },
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        style={{ padding: "30px" }}
      >
        {pricesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <PriceCard {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <div className="swiper-pagination"></div>
      </Box>
    </>
  );
}

export default PriceCardCarousel;
