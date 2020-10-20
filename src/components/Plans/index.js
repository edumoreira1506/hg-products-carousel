import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-slick';
import ComputerIlustration1 from '../../static/images/ilustrations/computer-1.svg';
import ComputerIlustration2 from '../../static/images/ilustrations/computer-2.svg';
import ComputerIlustration3 from '../../static/images/ilustrations/computer-3.svg';
import InfoIcon from '../../static/images/icons/info.svg';

import './index.scss';
import { CAROUSEL_PRODUCTS_KEY } from '../../config/constants';

const CAROUSEL_SETTINGS = {
  slidesToScroll: 1,
  slidesToShow: 3,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1.1,
      },
    },
  ],
};

const Plans = ({ display, products }) => {
  const { t } = useTranslation(['plans', 'common']);

  const getInfo = ({ key }) => {
    switch (key) {
      case CAROUSEL_PRODUCTS_KEY[0]: return {
        ilustration: ComputerIlustration1,
        data: '100 GB',
      };
      case CAROUSEL_PRODUCTS_KEY[1]: return {
        ilustration: ComputerIlustration2,
        data: '100 GB',
      };
      case CAROUSEL_PRODUCTS_KEY[2]: return {
        ilustration: ComputerIlustration3,
        data: '150 GB',
      };
      default: return null;
    }
  };

  return (
    <div className="Plans">
      <Carousel {...CAROUSEL_SETTINGS}>
        {products.map((product) => {
          const productInfo = product.plans[display];
          const { data, ilustration } = getInfo(product);

          return (
            <div className="Plans__product" key={product.id}>
              <div className="Plans__product-header">
                <img src={ilustration} className="Plans__product-ilustration" alt="computer" />
                <p className="Plans__product-name">{product.name}</p>
              </div>
              <div className="Plans__product-body">
                <div className="Plans__product-prices">
                  <p className="Plans__product-price Plans__product-price--risked">{productInfo.price}</p>
                  <p className="Plans__product-price">{productInfo.discountedPrice}</p>
                </div>
                <p className="Plans__product-equals-to">{t('plans:equalsTo')}</p>
                <p className="Plans__product-price-per-month">
                  R$
                  <span className="Plans__product-price-per-month--big">{productInfo.pricePerMonth.replace('R$', '')}</span>
                  /
                  {t('plans:month')}
                  *
                </p>
                <button className="Plans__product-buy-now">{t('plans:buyNow')}</button>
                <p className="Plans__product-free-domain">
                  {t('plans:freeDomain')}
                  <img src={InfoIcon} alt="info" className="Plans__product-info-icon" />
                </p>
                <div className="Plans__product-cta">
                  <p className="Plans__product-sale">{t('plans:sale', { price: productInfo.discount })}</p>
                  <span className="Plans__product-off-tag">{t('plans:off')}</span>
                </div>
                <div className="Plans__product-footer">
                  <p className="Plans__product-footer-text Plans__product-footer-text--dotted">{t(`${product.key}.info`)}</p>
                  <p className="Plans__product-footer-text">
                    <b className="Plans__product-footer-text--margin-right">{data}</b>
                    {t(`${product.key}.data`)}
                  </p>
                  <p className="Plans__product-footer-text Plans__product-footer-text--dotted">
                    {t(`${product.key}.email`)}
                    <b className="Plans__product-footer-text--margin-left">{t('common:unlimited')}</b>
                  </p>
                  <p className="Plans__product-footer-text">
                    {t(`${product.key}.sites`)}
                    <b className="Plans__product-footer-text--outline Plans__product-footer-text--margin-left">{t('common:free')}</b>
                  </p>
                  <p className="Plans__product-footer-text">
                    {t(`${product.key}.ssl`)}
                    <b className="Plans__product-footer-text--margin-left Plans__product-footer-text--margin-right">{t('common:free')}</b>
                    (https)
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

const planOptionPropTypes = PropTypes.shape({
  price: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  discountedPrice: PropTypes.string.isRequired,
  pricePerMonth: PropTypes.string.isRequired,
  months: PropTypes.number.isRequired,
}).isRequired;

Plans.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    plans: {
      monthly: planOptionPropTypes,
      annually: planOptionPropTypes,
      triennially: planOptionPropTypes,
    },
  })).isRequired,
  display: PropTypes.string.isRequired,
};

export default Plans;
