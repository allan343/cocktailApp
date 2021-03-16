import React from 'react';


export default function CockTail({cocktail}) {
  
  //let cocktail = cocktail
  console.log(cocktail)
  console.log(cocktail.strDrink)
 // var cocktail = JSON.parse(drinkItem);
 // console.log(drinkItem);
 // console.log(drinkItem.drinks[0]["strDrink"]);
 //console.log(drinkItem.cocktail.drinks[0].strDrink);
  return (
    <div className='SchoolClassItem__row'>
     <div className='SchoolClassItem__row'>
     {<div className="courseName"> {cocktail.strDrink}</div>}
      {<div className="days"> <span id="item-content">{cocktail.strCategory}</span></div>}
      {<div className="startEnd"> <span id="item-content">{cocktail.strTags}</span></div>}
    </div>
    
    </div>
  )
}

