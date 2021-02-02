import React from 'react';


export default function CockTail(props) {
  let drinkItem = props
  return (
    <div className='SchoolClassItem__row'>
      {<div className="courseName"> {props.strCategory}</div>}
    
    </div>
  )
}

