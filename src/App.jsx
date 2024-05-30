import React from 'react'
import { data } from './Mockdata';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

function App() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    cssEase: "linear",
    content:"null"
  };
  return (
    <>
      <div className=" container m-auto relative">
        <div className="mt-20"> 
        <Slider {...settings}>
          
            {data.map((item) => (
              <div className='  flex justify-center items-center'>
              <img className="h-28 w-36 rounded-xl hover:scale-105 transition-transform ease-in-out duration-300 " 
                src={item.img}
                alt="/" />
              </div>
            ))}
          
            </Slider>
          </div>
          </div>
          
    </>
  );
}


export default App