export const SET_DISPLAY = 'SET_DISPLAY';
export const SET_QUERY = 'SET_QUERY';

export const setDisplay = (display) => ({
  type: SET_DISPLAY,
  payload: { display },
});

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: { query },
});
