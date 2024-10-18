

import React from 'react';

export default function PageHeader(props) {    

  return (
<div className='text-center pt-2'>
        <div className='text-center pt-2 fs-2' style={{color:"#4a4a4a"}}><em>{props.title}</em></div>
        <hr className='text-center' style={{width:"30%", margin:"auto"}}></hr>
    </div>
  )
}