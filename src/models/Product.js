import { CAROUSEL_PRODUCTS_KEY } from '../config/constants';
import productFormatter from '../formatters/productFormatter';

const getCarouselProducts = (pricesObject) => CAROUSEL_PRODUCTS_KEY.map(
  (carouselProductKey) => pricesObject[carouselProductKey],
);

const formatProducts = (carouselProductsRaw) => carouselProductsRaw
  .map((product, index) => productFormatter(product, CAROUSEL_PRODUCTS_KEY[index]));

export const getProducts = async (priceAPI, callback) => {
  const pricesResponse = await priceAPI.all();

  if (!pricesResponse.ok) return callback.onError();

  const pricesObject = pricesResponse.prices.shared.products;
  const carouselProductsRaw = getCarouselProducts(pricesObject);
  const formattedProducts = formatProducts(carouselProductsRaw);

  return callback.onSuccess(formattedProducts);
};
