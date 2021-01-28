import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
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
    cocktail:{}
};

handleAddCockTail = (classObject) => {
console.log("does this work?")
 
              const newArr = [...this.state.cocktails, classObject];
              this.setState({
                  cocktails: newArr
              });
          console.log(this.state.cocktails);
      
};

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
</>
);
}

  render(){

    const value = {
      cocktails: this.state.cocktails,
      addCockTail: this.handleAddCockTail
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
