import CONFIG from './Config';
// example endpoints ////////////////////////////////////////////////////////////////////////
const exampleUrl = {
  GET: `${CONFIG.URLS.CLIENT}/get`,
  POST: `${CONFIG.URLS.CLIENT}/post`,
  PUT: `${CONFIG.URLS.CLIENT}/put`,
  DELETE: `${CONFIG.URLS.CLIENT}/delete`,
  TOGGLE: `${CONFIG.URLS.CLIENT}/toggle`,
};

export default {
  exampleUrl,
};
