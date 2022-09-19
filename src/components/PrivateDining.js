import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function PrivateDining() {


    return (
        <section className='private-dining mt-6 d-flex flex-column justify-content-center align-items-center arrow-bottom bg-img py-6'>

            <h3 className="private-dining-title bigger-title-2 text-white">
                PRIVATE DINING
            </h3>

            <p className='private-dining-text mt-3 bigger-text-5 text-white'>YOUR EVENT, YOUR WAY</p>

            <div className="private-dining-btn-list mt-4 text-center">

                <Link className="btn-1 mt-3 me-lg-4" to="/">
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} className="me-3" size="sm"></FontAwesomeIcon>ENQUIRE NOW
                    </span>
                </Link>  

                <div className="d-lg-none"></div>
                 <Link className="btn-1 mt-3" to="tel:0123-456-789">
                    <span>
                        <FontAwesomeIcon icon={faPhone} className="me-3" size="sm"></FontAwesomeIcon>0123-456-789
                    </span>
                </Link>  

            </div>

            
            
        </section>
    );
}
  
export default PrivateDining;