import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel: React.FC = () => {
  const images = [
    { src: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899315/otel6_scxjbz.jpg", caption: "Hotel View" },
    { src: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899315/hotel2_mfvrdz.jpg", caption: "Function Hall" },
    { src: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897624/prebed2_fzmgv2.jpg", caption: "Premium Bed Room" },
    { src: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897614/twinshare1_lvbllg.jpg", caption: "Twin Share Room" },
    { src: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897614/waiting_quwthc.jpg", caption: "Front Desk" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <div className="w-full overflow-hidden mt-0">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative">
            {/* 🌄 Responsive full-height image */}
            <img
              src={img.src}
              alt={img.caption}
              className="
                w-full
                h-[80vh]               /* Default height */
                sm:h-[85vh]            /* Tablets */
                md:h-[90vh]            /* Medium screens */
                lg:h-[100vh]           /* Large screens */
                object-cover           /* Ensures full coverage without distortion */
                object-center
                transition-all
                duration-500
                ease-in-out
              "
            />
            {/* 🩶 Caption Overlay */}
            <div
              className="
                absolute
                bottom-8
                left-1/2
                transform -translate-x-1/2
                bg-black/60
                text-white
                px-8 py-4
                rounded-2xl
                text-lg sm:text-2xl
                font-semibold
                shadow-xl
                backdrop-blur-sm
              "
            >
              {img.caption}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
