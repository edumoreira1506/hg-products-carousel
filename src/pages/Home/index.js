import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Dependencies from '../../config/dependencies';
import useApi from '../../hooks/useApi';
import { getProducts } from '../../models/Product';
import useService from '../../hooks/useService';
import { setProducts } from '../../redux/actions/products';
import withRedux from '../../wrappers/withRedux';
import Header from '../../components/Header';
import Banner from '../../components/Banner';

import './index.scss';

const HomePage = ({ dependencies = Dependencies }) => {
  const dispatch = useDispatch();
  const PriceAPI = useApi(dependencies, 'Price');
  const Alert = useService(dependencies, 'Alert');
  const { t } = useTranslation('common');

  useEffect(() => {
    getProducts(PriceAPI, {
      onSuccess: (products) => dispatch(setProducts(products)),
      onError: () => Alert.error(t('somethingWrong')),
    });
  }, [Alert, PriceAPI, dispatch, t]);

  return (
    <div className="HomePage">
      <Header />
      <Banner />
    </div>
  );
};

export default withRedux(HomePage);
