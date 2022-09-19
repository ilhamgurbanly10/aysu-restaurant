import { BoxLink2 } from "./Buttons";
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className='footer mt-6 text-center'>

            
            <div className="footer-container container-2 bg-very-light-grey py-5">

                <h5 className="footer-main-title smaller-title mb-2">
                    FIND US
                </h5>

                <div className="footer-list row gx-0 px-3 px-lg-0 mx-auto mt-5 w-100 justify-content-between">

                    <div className="footer-item col-12 col-lg-3 mt-4 mt-lg-0">
                        <BoxLink2 title="CALL US" text="01622 222 222" icon="fa fa-phone" to="/"/>
                    </div>

                    <div className="footer-item col-12 col-lg-3 mt-4 mt-lg-0">
                        <BoxLink2 title="ADDRESS" text="E-91, First Floor Industrial Area Phase 10, Baku" icon="fa fa-map-marker" to="/"/>
                    </div>

                    <div className="footer-item col-12 col-lg-3 mt-4 mt-lg-0">
                        <BoxLink2 title="EMAIL" text="bookings@aysu-restaurant.com" icon="fa fa-envelope" to="/"/>
                    </div>

                </div>

            </div>

            <div className="footer-bottom-container text-center py-5 container-2">

                <div className="footer-btn-list d-flex justify-content-center align-items-center">

                    <Link className="footer-btn rounded-btn rotate-icon me-3" to="/">
                        <i className="fa fa-twitter"></i>
                    </Link> 

                    <Link className="footer-btn rounded-btn rotate-icon me-3" to="/">
                        <i className="fa fa-facebook"></i>
                    </Link> 

                    <Link className="footer-btn rounded-btn rotate-icon" to="/">
                        <i className="fa fa-instagram"></i>
                    </Link> 

                </div>

                <p className="footer-copyright normal-text mt-4">
                    © 2022 Copyright Aysu Restaurant.
                </p>

            </div>
           
            
        </footer>
    );
}
  
export default Footer;