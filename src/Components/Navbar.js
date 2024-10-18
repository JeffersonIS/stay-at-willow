import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="tp">
        <Link to="/">
          <img
            src={props.logo}
            width="35"
            height="35"
            className="logo"
            alt="React Bootstrap logo"
          />
        </Link>

        <span className='menu-items'>
          <Link to="/thehome">The Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/booknow">Book Now</Link>
        </span>

        {/* <div className='menu-title-mobile'><div>Stay At Willow</div></div> */}

        <a className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <></>
          )}
        </a>

        {isOpen && (
          <div className='menu-items-responsive' onClick={() => setIsOpen(!isOpen)}>
            <div className="hamburger-icon-open" onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon icon={faX} />
            </div>
            <div className='menu-items-container'>
              <Link className="mt-2" to="/thehome">The Home</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/reviews">Reviews</Link>
              <Link className="mb-2" to="/booknow">Book Now</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
