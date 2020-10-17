import useService from './useService';

const useApi = (dependencies, entity) => {
  const apiService = useService(dependencies, 'Api');
  const entityService = apiService[entity];

  return entityService;
};

export default useApi;
