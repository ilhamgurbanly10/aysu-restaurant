import Images from './Images';
import { Link } from "react-router-dom";

function InstagramGallery() {

    return (
        <section className='instagram-gallery mt-6 text-center arrow-bottom'>

            <h5 className='instagram-gallery-title smaller-title mb-2'>
                INSTAGRAM GALLERY
            </h5>

            <Link className="instagram-gallery-link text-btn-2 mt-5" to="/">
                @ aysu-restaurant
            </Link> 
            
            <div className="instagram-gallery-list row w-100 mt-5 gx-0">

                <div className="instagram-gallery-item col-12 col-lg me-lg-6 mb-6 growing-overlay-container bg-img bg-img-2 img-container">
                    <div className="growing-overlay">
                        <i className="fa fa-instagram growing-overlay-icon fa-3x"></i> 
                    </div>
                </div>

                <div className="instagram-gallery-item col-12 col-lg ms-lg-6 me-lg-6 mb-6 growing-overlay-container bg-img bg-img-3 img-container">
                    <div className="growing-overlay">
                        <i className="fa fa-instagram growing-overlay-icon fa-3x"></i> 
                    </div>
                </div>

                <div className="instagram-gallery-item col-12 col-lg ms-lg-6 me-lg-6 mb-6 growing-overlay-container bg-img bg-img-4 img-container">
                    <div className="growing-overlay">
                        <i className="fa fa-instagram growing-overlay-icon fa-3x"></i> 
                    </div>
                </div>

                <div className="instagram-gallery-item col-12 col-lg ms-lg-6 mb-6 growing-overlay-container bg-img bg-img-5 img-container">
                    <div className="growing-overlay">
                        <i className="fa fa-instagram growing-overlay-icon fa-3x"></i> 
                    </div>
                </div>

            </div>

            <div className="instagram-gallery-container container-2 bg-orange py-7">
                <p className="instagram-gallery-text bigger-text-3 fw-bold text-white width-3">
                    Rule were their evening in lesser so good said they're fowl greater.
                    Sixth their above kind male there also likeness great there own.
                </p>
            </div>
               
            
        </section>
    );
}
  
export default InstagramGallery;