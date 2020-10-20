import { planOptions, DISCOUNT_PERCENTAGE } from '../config/constants';
import currencyFormatter from './currencyFormatter';

const calcDiscount = (price) => price * DISCOUNT_PERCENTAGE;

const calcDiscountedPrice = (price) => price - calcDiscount(price);

const calcPricePerMonth = (price, months) => price / months;

const productFormatter = ({ name, id, cycle: { triennially, annually, monthly } }, key) => {
  const monthlyPrice = Number(monthly.priceOrder);
  const annuallyPrice = Number(annually.priceOrder);
  const trienniallyPrice = Number(triennially.priceOrder);

  return {
    key,
    id,
    name,
    plans: {
      [planOptions.MONTHLY]: {
        price: currencyFormatter(monthlyPrice),
        discount: currencyFormatter(calcDiscount(monthlyPrice)),
        discountedPrice: currencyFormatter(calcDiscountedPrice(monthlyPrice)),
        pricePerMonth: currencyFormatter(calcPricePerMonth(monthlyPrice, monthly.months)),
        months: monthly.months,
      },
      [planOptions.ANNUALLY]: {
        price: currencyFormatter(annuallyPrice),
        discount: currencyFormatter(calcDiscount(annuallyPrice)),
        discountedPrice: currencyFormatter(calcDiscountedPrice(annuallyPrice)),
        pricePerMonth: currencyFormatter(calcPricePerMonth(annuallyPrice, annually.months)),
        months: annually.months,
      },
      [planOptions.TRIENNIALLY]: {
        price: currencyFormatter(trienniallyPrice),
        discount: currencyFormatter(calcDiscount(trienniallyPrice)),
        discountedPrice: currencyFormatter(calcDiscountedPrice(trienniallyPrice)),
        pricePerMonth: currencyFormatter(calcPricePerMonth(trienniallyPrice, triennially.months)),
        months: triennially.months,
      },
    },
  };
};

export default productFormatter;
