import React from 'react';


export default function CockTail(props) {
 

  return (
    <div className='SchoolClassItem__row'>
      {<div className="courseName"> {props.classname}</div>}
      {<div className="days"> <span id="item-content">{days}</span></div>}
      {<div className="startEnd"> <span id="item-content">{props.starttime} - {props.endtime}</span></div>}
    </div>
  )
}

