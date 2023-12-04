import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css/effect-cards";
import "../index.css";
function Mainsm() {
  return (
    <div className="">
      <br />
      <h1 id="header1" className="text-3xl font-bold text-center">
        Stylish Websites
      </h1>
      <br />
      <div className="floating me-20">
        <center>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="./mobile1.png"
                alt=""
                style={{ maxWidth: "400px", width: "200%" }}
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                src="./desktop1.png"
                alt=""
                style={{ maxWidth: "400px", width: "250%" }}
                className="ms-5"
              />
            </SwiperSlide>
          </Swiper>
        </center>
        <br />
        <br />
        <br />
      </div>
      <center>
        <h1 id="header1" className="text-3xl font-bold text-center">
          Multiple Language Expirience
        </h1>
        <br />
        <br />
      </center>
      <div className="grid grid-cols-3 ms-16">
        <div>
          <img src="./java.svg" alt="" style={{ maxWidth: "49%" }} />
        </div>
        <div>
          <img src="./HTML5_Badge.svg.png" alt="" style={{ maxWidth: "49%" }} />
        </div>
        <div>
          <img src="./React-icon.svg.png" alt="" style={{ maxWidth: "49%" }} />
        </div>
      </div>
      <div className="grid grid-cols-3 ms-16 mt-10">
        <div>
          <img
            src="./Unofficial_JavaScript_logo_2.svg.png"
            alt=""
            style={{ maxWidth: "49%" }}
          />
        </div>
        <div>
          <img src="./react-bootstrap.png" alt="" style={{ maxWidth: "49%" }} />
        </div>
        <div>
          <img src="./w3_css-icon.svg" alt="" style={{ maxWidth: "49%" }} />
        </div>
      </div>
      <br />
      <br />
      <div className="mb-20">
        <center className="mt-5">
          <img
            src="./tail.svg"
            alt=""
            style={{ maxWidth: "40%" }}
            className=""
          />
          <br />
          <br />
          <br />
        </center>
      </div>
    </div>
  );
}

export default Mainsm;
