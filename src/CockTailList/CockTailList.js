import React, { Component } from 'react';
import CockTail from '../CockTail/CockTail'
import CockTailDetails from '../CockTailDetails/CockTailDetails'
import { NavLink} from 'react-router-dom';

import ApiContext from '../ApiContext/ApiContext';



class CockTailList extends Component {
  static contextType = ApiContext;



  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

    
    
    this.closeCockTail = this.closeCockTail.bind(this);

  }

  cocktailClicked(cocktailId) {
   // console.log("list  id: "+ cocktailId)
    this.setState({ clicked: true });
    this.context.setCockTailId(cocktailId);
    
  }

  closeCockTail() {
    this.setState({ clicked: false });
  }

  render() {
 
    const { cocktails } = this.props;
   
  //console.log(cocktails)
  
   

return (
    <div>
    {

(this.state.clicked) ?<CockTailDetails  id={this.context.getCockTailId()} closeCockTail={this.closeCockTail}/> :
      <div className="classList">
        <ul className='SchoolClassList__list' aria-live='polite'>
          {cocktails.map(cocktail =>

            <li key={cocktail.id} id="class" onClick={()=>this.cocktailClicked(cocktail.id)}>
              <CockTail
              cocktail={cocktail}
           
              />
            </li>
          )}
        </ul>
      </div>
       }
       </div>
    );
    }

   
  }


export default CockTailList;