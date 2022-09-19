import React from 'react';
import Slider from "react-slick";
import { useEffect } from 'react';
import '../../assets/css/flash/lightbox.css';
import flashLightbox from '../../assets/js/flash/lightbox.js';

function GallerySlider(props) {

    useEffect(() => { 
        const el = document.querySelector('.'+props.specialClassName+'');
        flashLightbox(el);
    }, []);

    var settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        rows: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: "4000"
    };

    return <Slider {...settings} className={props.specialClassName + " slider-height-normal slider-spacing-sm bigger-slick-dots slider-arrows" + (props.restClassName ? " " + props.restClassName : "")}>{props.children}</Slider> 
}
  
export default GallerySlider;