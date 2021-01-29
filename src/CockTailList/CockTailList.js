import React, { Component } from 'react';
import CockTail from '../CockTail/CockTail'
import { NavLink} from 'react-router-dom';

import ApiContext from '../ApiContext/ApiContext';



class CockTaiList extends Component {
  static contextType = ApiContext;

  static defaultProps = {
    cocktails: [],
    message:''
  };

  constructor(props) {
    super(props);
  }

  render() {

    const { cocktails } = this.props;
   
  
  
   

return (
    <div>
    {
      <div className="classList">
        <ul className='SchoolClassList__list' aria-live='polite'>
          {cocktails.map(cocktail =>

            <li key={cocktail.idDrink} id="class" >
              <CockTail
                key={cocktail.id}
                {...cocktail}
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