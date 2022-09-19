import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export const Modal = () => {
    return (
      <>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">

              <div className="modal-content">

                <div className="modal-header">
                    <h3 className="modal-title ff-futura-pt fw-bold" id="exampleModalLabel">Book a Table</h3>
                    <button type="button" className="btn-close btn-rotate" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">

                  <form>

                    <div className="mb-3 position-relative">
                      <input type="date" required className="form-control input" name="bookTableDate" aria-label="bookTableDate" />
                      <FontAwesomeIcon icon={faCalendar} className="input-icon"></FontAwesomeIcon>
                    </div>

                    <div className="mb-3 position-relative">
                      <select className="form-select input" name="bookTableTime" aria-label="bookTableTime">
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

                    <div className="mb-3 position-relative">
                      <select className="form-select input" name="bookTablePeople" aria-label="bookTablePeople">
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

                    <button type="submit" className="btn-1 w-100">
                      <span>BOOK A TABLE</span>
                    </button>

                  </form>

                </div>

              </div>

          </div>

        </div>
      </>
    )
};

export const ModalBtn = () => {
    return (
      <>
        <button type="button" className="btn-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <span>BOOK A TABLE</span>
        </button>
      </>
    )
};

export default Modal;


