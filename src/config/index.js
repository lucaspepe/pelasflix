const URL_BACKEND_API = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://pelasflix.herokuapp.com';

export default {
  URL_BACKEND_API,
};
