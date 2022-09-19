import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function MakeReservation() {

    return (
        <section className='make-reservation mt-6 d-flex flex-column justify-content-center align-items-center arrow-bottom bg-img bg-img-6 py-6'>

            <h3 className="make-reservation-title bigger-title-2 text-white">
                MAKE RESERVATION
            </h3>

            <form className="make-reservation-form mt-5 row gx-0 mx-auto width-4">

                <div className="mb-3 position-relative col-12 col-lg me-lg-3">
                    <input type="date" required className="form-control input border-0" name="MRbookTableDate" aria-label="MRbookTableDate" />
                    <FontAwesomeIcon icon={faCalendar} className="input-icon"></FontAwesomeIcon>
                </div>

                <div className="mb-3 position-relative col-12 col-lg me-lg-3 ms-lg-3">
                    <select className="form-select input border-0" name="MRbookTableTime" aria-label="MRbookTableTime">
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                    </select>
                    <FontAwesomeIcon icon={faClock} className="input-icon"></FontAwesomeIcon>
                </div>

                <div className="mb-3 position-relative col-12 col-lg me-lg-3 ms-lg-3">
                    <select className="form-select input border-0" name="MRbookTablePeople" aria-label="MRbookTablePeople">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <FontAwesomeIcon icon={faUser} className="input-icon"></FontAwesomeIcon>
                </div>

                <div className="col-12 col-lg ms-lg-3">
                    <button type="submit" className="btn-1 w-100" name="MRbookTableSubmit">
                        <span>BOOK A TABLE</span>
                    </button>
                </div>    

            </form>

            
            
        </section>
    );
}
  
export default MakeReservation;