import Swal from 'sweetalert2';
import i18next from '../../config/i18n';

const error = (errorMessage) => Swal.fire(
  i18next.t('common:ops'),
  errorMessage,
  'error',
);

const success = (successMessage) => Swal.fire(
  i18next.t('common:nice'),
  successMessage,
  'success',
);

export default { error, success };
