import React from 'react';
import PageHeader from './PageHeader';

const BookNow = () => {
  return (
    <>
     <PageHeader title="Book Now"/>
     <div class="container text-center pt-4">
        <div class='text-center'>
          <p class='fs-5'>Contact Delene directly to book your stay.</p>
          <p class='fs-5'>See <a className='airbnb-link' href="https://www.airbnb.com/rooms/1044238407568913774?adults=1&children=0&enable_m3_private_room=true&infants=0&location=richland%20wa&pets=0&search_mode=regular_search&check_in=2024-10-18&check_out=2024-10-23&source_impression_id=p3_1728531424_P381KqP4KDhGubSg&previous_page_section_name=1001&federated_search_id=b837cf8d-9ac2-405a-89bc-3f61fc80bdbb" target="_blank">the Airbnb calendar</a> for availability and pricing.</p>
          <p class='fs-5 italic'>Call or Text: (509) 727-0111</p>
        </div>
      </div>
    </>
  );
};

export default BookNow;