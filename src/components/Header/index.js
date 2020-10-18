import React from 'react';
import Logo from '../Logo';

import './index.scss';

const Header = () => (
  <header className="Header">
    <div className="Header__wrapper">
      <div className="Header__logo">
        <Logo />
      </div>
    </div>
  </header>
);

export default Header;
