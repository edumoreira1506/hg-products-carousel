import RootAPI from './root';

export const all = async () => {
  try {
    const { data: prices } = await RootAPI.get('/prices');

    return {
      ok: true,
      prices,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};
