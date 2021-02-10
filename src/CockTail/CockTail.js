import React from 'react';


export default function CockTail(props) {
  let drinkItem = props
 // var cocktail = JSON.parse(drinkItem);
 // console.log(drinkItem);
 // console.log(drinkItem.drinks[0]["strDrink"]);
 //console.log(drinkItem.cocktail.drinks[0].strDrink);
  return (
    <div className='SchoolClassItem__row'>
     <div className='SchoolClassItem__row'>
      {<div className="courseName"> {drinkItem.cocktail.drinks[0].strDrink}</div>}
      {<div className="days"> <span id="item-content">{drinkItem.cocktail.drinks[0].strCategory}</span></div>}
      {<div className="startEnd"> <span id="item-content">{drinkItem.cocktail.drinks[0].strTags}</span></div>}
    </div>
    
    </div>
  )
}

