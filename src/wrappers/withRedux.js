import React from 'react';
import ReduxContainer from '../containers/ReduxContainer';

const withRedux = (Component) => () => (
  <ReduxContainer>
    <Component />
  </ReduxContainer>
);

export default withRedux;
