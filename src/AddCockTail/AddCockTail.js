import React, { Component } from 'react';
import ApiContext from '../ApiContext/ApiContext';



class AddCockTail extends React.Component {

  static contextType = ApiContext;
  
  constructor(props) {
    super(props);
    this.state={
    cocktailQuery:""
  };
  }

  updateCockTail(cocktailQuery) {
    console.log(cocktailQuery)
    this.setState({ cocktailQuery:cocktailQuery });
  };
/*
searchCocktail(cocktailQuery) {
  console.log(cocktailQuery)
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailQuery}`)
      .then((cockTailRes) => {
          if (!cockTailRes.ok)
              return cockTailRes.json().then(e => Promise.reject(e));
          return (cockTailRes.json());
      })
      .then((cockTailRes) => {
        console.log(cockTailRes.drinks[0].idDrink)
          this.setState({ cockTailQuery: cockTailRes });
         // this.context.addCockTails(cockTailRes)
      })
      .catch(error => {
      });

      console.log(this.context.cocktails)
}
*/
  render(){
  return (
    <div>
         <form className="folder" onSubmit={(event) => {

          event.preventDefault();
         console.log("submit")
         
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.cocktailQuery}`)
            .then((cockTailRes) => {
                if (!cockTailRes.ok)
                    return cockTailRes.json().then(e => Promise.reject(e));
                return (cockTailRes.json());
            })
            .then((cockTailRes) => {
              console.log(cockTailRes.drinks[0].idDrink)
             //   this.setState({ cockTailQuery: cockTailRes });
                this.context.addCockTail(cockTailRes)
            })
            .catch(error => {
            });
      







          //add class object to class array
          // then go back to previous page
         // this.context.addCockTail(cockTailRes)
         // this.props.history.goBack();
        }}></form>

        
          <h1>Country List</h1>
          <input type="text" className="folder__control"
                name="classname" id="classname"  onChange={e => this.updateCockTail(e.target.value)} required="required" />
     <button type="submit" className="saveClassButton" >
                  Save
                </button>
    {/*
    <CountryList countryList={countryList}/>*/}
        
        </div>
       );
}
}

export default AddCockTail;
