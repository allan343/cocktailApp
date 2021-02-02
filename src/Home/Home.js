import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import CockTailList from '../CockTailList/CockTailList';
import HeaderNav from '../HeaderNav/HeaderNav';




export default class Home extends React.Component {
  static contextType = ApiContext;

  render() {
    //let cocktails= this.context.cocktails;
    return (
    
      <div className="cocktailList">
        <HeaderNav></HeaderNav>
        <div>CockTail LIst</div>
      <CockTailList cocktails={this.context.cocktails} ></CockTailList>
    </div>
    )
  }
}