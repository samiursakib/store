import React from "react";

// Styles
import "./style.scss";

const Header = ({ tabs, selected, setSelected, children }) => {
  return (
    <div style={{width: '100%'}}>
      <ul className='nav nav-tabs'>
        {
          tabs.map( tab => {
            const active = tab === selected ? ' active' : '';
            return (
              <li className='nav-item' key={tab} style={{cursor: 'pointer'}}>
                <a className={'nav-link' + active } onClick={() => setSelected(tab)}>{ tab }</a>
              </li>
            );
          })
        }
      </ul>
      { children }
    </div>
  );
};

export default Header;
