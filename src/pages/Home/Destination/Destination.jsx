import image1 from "../../../assets/Destination/image1.png";
import image2 from "../../../assets/Destination/image2.png";
import image3 from "../../../assets/Destination/image3.png";
import image4 from "../../../assets/Destination/image4.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Destination = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div>
            <img src={image1} alt="" />
            </div>
            <h1>Turkey</h1>
            <p>145263 Travelers</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
            <img src={image2} alt="" />
            </div>
            <h1>Thailand</h1>
            <p>145263 Travelers</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
            <img src={image3} alt="" />
            </div>
            <h1>Franch</h1>
            <p>145263 Travelers</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
            <img src={image4} alt="" />
            </div>
            <h1>United Kingdom</h1>
            <p>145263 Travelers</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Destination;
