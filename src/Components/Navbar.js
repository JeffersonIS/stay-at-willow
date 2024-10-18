import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)

  return (
    <>
      <div class="tp">
      <a href="/">
        <img
          src={props.logo}
          width="35"
          height="35"
          class="logo"
          alt="React Bootstrap logo"
          />    
      </a>
  
      <span className='menu-items'>
        <a href="/thehome">The Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/reviews">Reviews</a>
        <a href="/booknow">Book Now</a>
      </span>

      <a className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <></>
          )}
      </a>


      {!isOpen ? (
          <></>
        ) : (
        <div className='menu-items-responsive' onClick={() => setIsOpen(!isOpen)}>
            <div className="hamburger-icon-open" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faX} />
            </div>
            <div className='menu-items-container'>
            <a className="mt-2" href="/thehome" >The Home</a>
            <a href="/gallery" >Gallery</a>
            <a href="/reviews" >Reviews</a>
            <a className="mb-2" href="/booknow" >Book Now</a>
          </div>
        </div> 
        )}
              </div>

    </>
  )
};

export default Navigation;
