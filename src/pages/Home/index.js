import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Dependencies from '../../config/dependencies';
import useApi from '../../hooks/useApi';
import { getProducts } from '../../models/Product';
import useService from '../../hooks/useService';
import { setProducts } from '../../redux/actions/products';
import withRedux from '../../wrappers/withRedux';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Switcher from '../../components/Switcher';
import Plans from '../../components/Plans';
import { planOptions } from '../../config/constants';
import { setDisplay } from '../../redux/actions/config';

import './index.scss';

const HomePage = ({ dependencies = Dependencies }) => {
  const dispatch = useDispatch();
  const PriceAPI = useApi(dependencies, 'Price');
  const Alert = useService(dependencies, 'Alert');
  const { t } = useTranslation(['common', 'switcher']);
  const { products, config: { display } } = useSelector((state) => state);

  useEffect(() => {
    getProducts(PriceAPI, {
      onSuccess: (newProducts) => dispatch(setProducts(newProducts)),
      onError: () => Alert.error(t('common:somethingWrong')),
    });
  }, [Alert, PriceAPI, dispatch, t]);

  const handleChangeDisplay = (newDisplay) => {
    dispatch(setDisplay(newDisplay));
  };

  const options = [
    {
      value: planOptions.TRIENNIALLY,
      label: t(`switcher:${planOptions.TRIENNIALLY}`),
    },
    {
      value: planOptions.ANNUALLY,
      label: t(`switcher:${planOptions.ANNUALLY}`),
    },
    {
      value: planOptions.MONTHLY,
      label: t(`switcher:${planOptions.MONTHLY}`),
    },
  ];

  return (
    <div className="HomePage">
      <Header />
      <Banner />
      <div className="HomePage__switcher">
        <p className="HomePage__text">{t('switcher:title')}</p>
        <div className="HomePage__switcher-container">
          <Switcher onChange={handleChangeDisplay} options={options} />
        </div>
      </div>
      <Plans products={products} display={display} />
    </div>
  );
};

export default withRedux(HomePage);
