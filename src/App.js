import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import EditCockTailDetailsForm from './EditCockTailDetails/EditCockTailDetails'


import AddCockTail from './AddCockTail/AddCockTail';
import ApiContext from './ApiContext/ApiContext';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  state = {
    //array that holds all shows
    cocktailApi: [],
    cocktails: [],
    id: '',
    cocktail:{},
    cocktailClicked: false
};

handleAddCockTail = (classObject) => {
  //console.log(classObject)
//console.log("does this work?")
 
let noteObject ={notes:"",rating:0};

//let cockTailObject =[...classObject,...noteObject];
let cockTailObject = {
  ...classObject,
  ...noteObject
};
/*console.log("hi");
console.log(cockTailObject);
*/


console.log(this.state.cocktails);
              const newArr = [...this.state.cocktails, cockTailObject];
              this.setState({
                  cocktails: newArr
              });
          console.log(this.state.cocktails);
      
};

setCockTailId=(drinkID)=>
{
this.setState({id:drinkID});

}

setCockTailClicked = (drinkId) => {
  this.setState({ cocktailClicked: true });
  this.setCockTailId(drinkId);
}

getCockTailId = ()=>{
  return this.state.id;
}

getCockTail=(id)=>{

 return this.state.cocktails.find((cocktail)=>id==cocktail.id)
}

updateCockTail=(drink,id)=>{

console.log(drink)
console.log(id)
let cocktail=this.state.cocktails.find((cocktail)=>id==cocktail.id);
console.log(cocktail)
console.log(drink)
 cocktail = Object.assign(cocktail,drink);
this.setState({
  cocktails: this.state.cocktails
});

}


renderNavRoutes() {
  return (
    <>
  <Route
  key={'/'}
  exact path={'/'}
  component={Home}
/>

  <Route
  key={'/AddCockTail'}
  exact path={'/AddCockTail'}
  component={AddCockTail}
/>
<Route exact path="/CockTailDetails/Edit/:drinkId" render={
                    (routeProps) => {
                        return <EditCockTailDetailsForm {...this.getCockTail(routeProps.match.params.drinkId)}  {...routeProps}>
                        </EditCockTailDetailsForm>
                    }} />
</>
);
}

  render(){

    const value = {
      cocktails: this.state.cocktails,
      addCockTail: this.handleAddCockTail,
      setCockTailClicked:this.setCockTailClicked,
      setCockTailId: this.setCockTailId,
      getCockTailId: this.getCockTailId,
      getCockTail:this.getCockTail,
      updateCockTail:this.updateCockTail
    }
  return (
    <ApiContext.Provider value={value}>
    <div className="App">
     
      
      <div className="App">
          <header className="App__header">

          </header>
          <div >{this.renderNavRoutes()}</div>
      </div>
 
    </div>
    </ApiContext.Provider>

  );
}
}

export default App;
