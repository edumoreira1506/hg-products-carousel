import Swal from 'sweetalert2';

const error = (errorMessage) => Swal.fire(
  'Ops',
  errorMessage,
  'error',
);

const success = (successMessage) => Swal.fire(
  'Boa',
  successMessage,
  'success',
);

export default { error, success };
