import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../static/images/logo.svg';
import Dependencies from '../../config/dependencies';
import useApi from '../../hooks/useApi';
import { getProducts } from '../../models/Product';
import useService from '../../hooks/useService';
import { setProducts } from '../../redux/actions/products';

import './index.css';

const HomePage = ({ dependencies = Dependencies }) => {
  const dispatch = useDispatch();
  const PriceAPI = useApi(dependencies, 'Price');
  const Alert = useService(dependencies, 'Alert');

  useEffect(() => {
    getProducts(PriceAPI, {
      onSuccess: (products) => dispatch(setProducts(products)),
      onError: () => Alert.error('Erro na requisição!'),
    });
  }, [Alert, PriceAPI, dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default HomePage;
