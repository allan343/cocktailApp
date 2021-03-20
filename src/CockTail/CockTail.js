import React from 'react';


export default function CockTail(props) {
  
  let cocktail = props.cocktail
  console.log(cocktail)
  console.log(cocktail.strDrink)
 // var cocktail = JSON.parse(drinkItem);
 // console.log(drinkItem);
 // console.log(drinkItem.drinks[0]["strDrink"]);
 //console.log(drinkItem.cocktail.drinks[0].strDrink);
  return (
    <div className='SchoolClassItem__row'>
     <div className='SchoolClassItem__row'>
     {<div className="courseName"> {cocktail.name}</div>}
      {<div className="days"> <span id="item-content">{cocktail.category}</span></div>}
      {<div className="startEnd"> <span id="item-content">{cocktail.type}</span></div>}
    </div>
    
    </div>
  )
}

