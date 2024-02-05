import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "./testimonial.scss"; // Then import swiper.scss
import { EffectCreative } from "swiper/modules";
import Andrea from "../assets/andrea.png";
import Jill from "../assets/jill.png";
import Malar from "../assets/malar.png";
import Priya from "../assets/priya.png";
import Sage from "../assets/sage.png";

export default function Testimonial() {
  return (
    <div className="testimonial" id="Testimonial">
      <h1 className="swiper__heading">Testimonial</h1>

      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h4 className="customer__name">Andrea</h4>
          <img
            src={Andrea}
            className="testimonial__image"
            alt="Customer_image"
          />
          <p className="feedback__content">
            The calming vibes and organic facial at this spa really worked
            wonders; I left feeling so rejuvenated and at peace.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="customer__name">Jill</h4>
          <img src={Jill} className="testimonial__image" alt="Customer_image" />
          <p className="feedback__content">
            I felt like they really understood my skin, and the personalized
            skincare left me feeling pampered and revitalized
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="customer__name">Priya</h4>
          <img
            src={Priya}
            className="testimonial__image"
            alt="Customer_image"
          />
          <p className="feedback__content">
            That massage was amazing, and I loved that they use eco-friendly
            products; my visit felt truly refreshing and guilt-free
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="customer__name">Malar</h4>
          <img
            src={Malar}
            className="testimonial__image"
            alt="Customer_image"
          />
          <p className="feedback__content">
            The natural and organic focus here resonated with me, and the staff
            shared some great insights; overall, a positive and enlightening spa
            visi
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="customer__name">sage</h4>
          <img src={Sage} className="testimonial__image" alt="Customer_image" />
          <p className="feedback__content">
            Everything, from the natural oils to the herbal tea, made my spa day
            a serene escape; it's like they know exactly how to create a perfect
            retreat
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
