import React from 'react';
import HostGatorLogo from '../../static/images/logo.svg';

import './index.scss';

const Logo = () => (
  <figure className="Logo">
    <img src={HostGatorLogo} className="Logo__image" alt="Logo" />
  </figure>
);

export default Logo;
