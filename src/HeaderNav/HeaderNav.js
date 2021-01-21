import React from 'react';
import { NavLink } from 'react-router-dom';


export default class HeaderNav extends React.Component {

  render() {
    return (
      <div>
        <div className='title'>
          HomeworkApp
      </div>
        <div className='HeaderListNav'>
          {
          <NavLink
            className='AddCockTailLink'
            to={`/AddCockTail`}
            style={{ textDecoration: 'none' }}
          >
            <span className='HomeIcon'>
              Add CockTail
                </span>
          </NavLink>
          }

        </div>
      </div>
    )
  }
}
