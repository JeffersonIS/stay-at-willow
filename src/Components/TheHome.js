import React from 'react';
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import amenitiesList from '../Assets/amenitiesList';
import Description from './Description';


const TheHome = () => {
    const [tab, setTab] = useState(1); // State to track the current tab
    const [class1, setClass1] = useState('checked');
    const [class2, setClass2] = useState('');
    // Handler for tab change
    const handleToggleChange = (val) => {
      setTab(val);
    };
    
    useEffect(() => {
        if(tab === 1){
            setClass1('checked');
            setClass2('not-checked')
          } else {
            setClass1('not-checked');
            setClass2('checked')
          }
    })

  return (
    <>
    <div className='d-flex mt-2'>
        <div className="mt-4 text-center toggle-container">
            <div className={`toggle-button fs-4 ${class1}`} onClick={() => handleToggleChange(1)}><div/>
                Description</div>
            <div className={`toggle-button fs-4 ${class2}`} onClick={() => handleToggleChange(2)}><div/>
                Amenities</div>
        </div>
    </div>
    <div class="row text-center mt-3">
        <div class="col-sm"><em>14 guests &nbsp; | &nbsp; 5 beds &nbsp; | &nbsp; 5 baths</em></div>
    </div>

    <div class="text-center pb-1">

      {tab === 1 ? (
        <Description/>
      ) : (
        <>
            {amenitiesList.map(section => {
                return(
                    <div className='container'>
                        <div className="mt-5 text-left icon-container">
                            <div className='amenity-label mb-3'>{section.label}</div>
                            {section.subAmenitiesList.map(amenity => {
                                return(
                                    <>
                                    <div className="d-flex align-items-center mt-2"><FontAwesomeIcon icon={amenity.icon} className="icon" /><em><span className="ms-2 icon-label">{amenity.label}</span></em></div><hr style={{width: "100%", height: "0px"}}></hr>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </>
      )}

    </div>


    </>
  );
};

export default TheHome;

//Contact delene directly to book your stay and avoid additional booking fees. Check the availability calendar here (on Airbnb)