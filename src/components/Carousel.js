import Images from './Images';
import { Link } from "react-router-dom";

function Carousel() {
    return (
     
        <section className='arrow-bottom head-carousel'>

            <div id="headCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

                <div className="carousel-inner">

                    <div className="carousel-item active vh-100 px-5 overflow-hidden overlay d-flex flex-column justify-content-center align-items-center align-content-center">

                        <img src={Images.slide01} className="responsive-full-img position-absolute" alt="Slide 01" />

                        <h2 className='carousel-title bigger-cursive-title layer-3 text-center text-lg-start width-1'>Taste</h2>
                        <h1 className='carousel-subtitle bigger-title layer-3 text-center width-1 mt-lg-n1'>LOVED BY PEOPLE</h1>
                        <h5 className='carousel-text layer-3 bigger-text text-center mt-2 width-1'>1243TH AVENUE, BAKU</h5>
                        <h5 className='carousel-text layer-3 bigger-text text-center mt-2 width-1'>TEL: 1 (234) 5555</h5>

                        <Link className="carousel-link btn-1 btn-1-reverse layer-3 mt-5 white-btn" to="/">
                            <span>VIEW OUR MENU</span>
                        </Link>
                        
                    </div>

                    <div className="carousel-item vh-100 px-5 overflow-hidden overlay d-flex flex-column justify-content-center align-items-center align-content-center">

                        <img src={Images.slide02} className="responsive-full-img position-absolute" alt="Slide 01" />

                        <h2 className='carousel-title bigger-cursive-title layer-3 text-center text-lg-start width-1'>Taste</h2>
                        <h1 className='carousel-subtitle bigger-title layer-3 text-center width-1 mt-lg-n1'>LOVED BY PEOPLE</h1>
                        <h5 className='carousel-text layer-3 bigger-text text-center mt-2 width-1'>1243TH AVENUE, BAKU</h5>
                        <h5 className='carousel-text layer-3 bigger-text text-center mt-2 width-1'>TEL: 1 (234) 5555</h5>

                        <Link className="carousel-link btn-1 btn-1-reverse layer-3 mt-5 white-btn" to="/">
                            <span>VIEW OUR MENU</span>
                        </Link>
                        
                    </div>

                    <div className="carousel-item vh-100 px-5 overflow-hidden overlay d-flex flex-column justify-content-center align-items-center align-content-center">

                        <img src={Images.slide03} className="responsive-full-img position-absolute" alt="Slide 01" />

                        <h2 className='carousel-title bigger-cursive-title layer-3 text-center text-lg-start width-1'>Taste</h2>
                        <h1 className='carousel-subtitle bigger-title layer-3 text-center width-1 mt-lg-n1'>LOVED BY PEOPLE</h1>
                        <h5 className='carousel-text layer-3 bigger-text text-center mt-2 width-1'>1243TH AVENUE, BAKU</h5>
                        <h5 className='carousel-text layer-3 bigger-text text-center mt-2 width-1'>TEL: 1 (234) 5555</h5>

                        <Link className="carousel-link btn-1 btn-1-reverse layer-3 mt-5 white-btn" to="/">
                            <span>VIEW OUR MENU</span>
                        </Link>

                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#headCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#headCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
            
        </section>    
        
    );
}
  
export default Carousel;