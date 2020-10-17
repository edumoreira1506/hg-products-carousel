const useService = (dependencies, serviceName) => {
  const { Services: services } = dependencies;
  const service = services[serviceName];

  return service;
};

export default useService;
