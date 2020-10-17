import * as ProductModel from '../../models/Product';
import MOCKED_PRICES from '../mocks/prices';

describe('Product model', () => {
  describe('.getProducts', () => {
    let callback;

    beforeEach(() => {
      callback = {
        onError: jest.fn(),
        onSuccess: jest.fn(),
      };
    });

    it('has the correct behavior when api returns an error', async () => {
      const fakeApi = { all: jest.fn().mockReturnValue({ ok: false }) };

      await ProductModel.getProducts(fakeApi, callback);

      expect(callback.onError).toHaveBeenCalled();
      expect(callback.onSuccess).not.toHaveBeenCalled();
    });

    it('has the correct behavior when api does not return an error', async () => {
      const fakeApi = { all: jest.fn().mockReturnValue({ ok: true, prices: MOCKED_PRICES }) };

      await ProductModel.getProducts(fakeApi, callback);

      expect(callback.onError).not.toHaveBeenCalled();
      expect(callback.onSuccess).toHaveBeenCalled();
    });
  });
});
