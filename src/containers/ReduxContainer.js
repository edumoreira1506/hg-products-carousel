import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../redux';

const ReduxContainer = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

ReduxContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReduxContainer;
