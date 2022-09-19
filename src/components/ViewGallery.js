import { Link } from "react-router-dom";
import Images from './Images';
import { BoxLink } from './Buttons';

export function ViewGallery() {
    return (
        <section className="view-gallery mt-6 container-2 bg-orange py-5">

            <div className="view-gallery-list row gx-0 w-100 mx-auto py-2">

                <div className="view-gallery-item col-12 col-lg me-lg-2 mt-4 mt-lg-0 border-white border-2 border-lg-5 border">
                    <img src={Images.viewGallery01} alt="View Gallery Img" className="w-100 h-auto"/>
                </div>

                <div className="view-gallery-item col-12 col-lg ms-lg-2 me-lg-2 mt-4 mt-lg-0">
                    <BoxLink title="View our" text="FOOD & VENUE" subtitle="GALLERY "to="/"/>
                </div>

                <div className="view-gallery-item col-12 col-lg ms-lg-2 mt-4 mt-lg-0 border-white border-2 border-lg-5 border">
                <img src={Images.viewGallery02} alt="View Gallery Img" className="w-100 h-auto"/>
                </div>

            </div>

        </section>           
    );
}

export default ViewGallery;