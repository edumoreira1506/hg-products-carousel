import React from 'react';
import { useTranslation } from 'react-i18next';
import CheckIcon from '../../static/images/icons/check.svg';
import DownIcon from '../../static/images/icons/down.svg';
import BannerIlustration1 from '../../static/images/ilustrations/banner.svg';
import BannerIlustration2 from '../../static/images/ilustrations/man.svg';

import './index.scss';

const AMOUNT_OF_TOPICS = 3;

const Banner = () => {
  const { t } = useTranslation('banner');

  return (
    <div className="Banner">
      <img src={BannerIlustration1} alt="banner-ilustration-1" className="Banner__ilustration" />
      <div className="Banner__texts">
        <h2 className="Banner__subtitle">{t('subtitle')}</h2>
        <h1 className="Banner__title">{t('title')}</h1>
        <ul className="Banner__topics">
          {Array(AMOUNT_OF_TOPICS).fill().map((_, index) => (
            <li className="Banner__topic" key={t(`topics.${index + 1}`)}>
              <img src={CheckIcon} alt="check" className="Banner__check" />
              {t(`topics.${index + 1}`)}
            </li>
          ))}
        </ul>
      </div>
      <img src={BannerIlustration2} alt="banner-ilustration-1" className="Banner__ilustration" />
      <img src={DownIcon} className="Banner__down" alt="down" />
    </div>
  );
};

export default Banner;
