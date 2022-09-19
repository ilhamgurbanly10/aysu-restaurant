import React from 'react';
import Slider from "react-slick";

function SimpleSlider(props) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: "4000"
    };

    return <Slider {...settings} className={props.className}>{props.children}</Slider> 
}
  
export default SimpleSlider;