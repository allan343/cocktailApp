import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import { NavLink} from 'react-router-dom';
import CockTail from '../CockTail/CockTail';


export default class CockDetails extends React.Component {
  static contextType = ApiContext;
  constructor(props) {
    super(props);
  }

cancelHandle = ()=>{
 this.props.closeCockTail();

}

  render() {

    //console.log("coctkail id" + this.props.cocktailid)
    let cocktail = this.context.getCockTail(this.props.id);

    //console.log("cocktail object from prop is"+ cocktail)

    return (

      <div className='HomeworkDetails__row'>
        <button type="cancel" className="cancelShowButton" onClick={this.props.closeCockTail}>
          Back
        </button>
        {<div className="IBATags"><span id="item-details-label"> Name:</span> <span id="item-content"> {cocktail.name}</span></div>}
        {<div className="class"><span id="item-details-label"> IBA Category: </span> <span id="item-content">{cocktail.category}</span></div>}
        {<div className="type"> <span id="item-details-label">Type Of Glass:</span> <span id="item-content">{cocktail.type}</span></div>}
        {<div className="dueDate"><span id="item-details-label"> Instructions: </span> <span id="item-content">{cocktail.instructions}</span></div>}


        <NavLink className="editHomeworkPath"
          to={`/CockTailDetails/Edit/${this.context.getCockTailId()}`}
        >
          Edit
            </NavLink>

      </div>



    )
  }
}