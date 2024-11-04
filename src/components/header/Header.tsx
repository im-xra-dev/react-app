import * as React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <div className="left">
        <input id="site-search"></input>
      </div>
      <Link to="/" data-testid="header-home">
        <div className="center logo">
          <div className="clickable-div" />
        </div>
      </Link>
      <div className="right">
        <div id="profile-settings">TODO</div>
      </div>
    </div>
  );
}
