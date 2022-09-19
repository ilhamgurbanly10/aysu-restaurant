import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import SimpleSlider from "./SimpleSlider";

function Testimonials() {

    return (
        <section className='our-story mt-6 container-2 overflow-hidden pb-6'>

            <SimpleSlider className="our-story-slider bigger-slick-dots">
                
                <div className="our-story-slide text-center">

                    <FontAwesomeIcon icon={faQuoteLeft} className="our-story-slide-icon text-orange" size="3x"></FontAwesomeIcon>

                    <p className="our-story-slide-text bigger-text-3 fw-bold mt-4 width-2">
                        The set one creepeth given air behold bring herb so thing sixth 
                        spirit moveth lesser thing air without cattle itself darkness greater.
                    </p>

                    <p className="our-story-slide-name bigger-text-4 fw-bold mt-4 text-orange">
                        - Aysu Gurbanly
                    </p>

                </div>

                <div className="our-story-slide text-center">

                    <FontAwesomeIcon icon={faQuoteLeft} className="our-story-slide-icon text-orange" size="3x"></FontAwesomeIcon>

                    <p className="our-story-slide-text bigger-text-3 fw-bold mt-4 width-2">
                        The set one creepeth given air behold bring herb so thing sixth 
                        spirit moveth lesser thing air without cattle itself darkness greater.
                    </p>

                    <p className="our-story-slide-name bigger-text-4 fw-bold mt-4 text-orange">
                        - Aysel Gurbanly
                    </p>

                </div>

                <div className="our-story-slide text-center">

                    <FontAwesomeIcon icon={faQuoteLeft} className="our-story-slide-icon text-orange" size="3x"></FontAwesomeIcon>

                    <p className="our-story-slide-text bigger-text-3 fw-bold mt-4 width-2">
                        The set one creepeth given air behold bring herb so thing sixth 
                        spirit moveth lesser thing air without cattle itself darkness greater.
                    </p>

                    <p className="our-story-slide-name bigger-text-4 fw-bold mt-4 text-orange">
                        - Aysun Gurbanly
                    </p>

                </div>

            </SimpleSlider> 
           

        </section>
    );
}
  
export default Testimonials;