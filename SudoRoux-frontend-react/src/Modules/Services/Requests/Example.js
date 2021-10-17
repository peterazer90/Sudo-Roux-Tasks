import METHODS from '../Methods';
import PATHS from '../Endpoints';

const Example = (REQUEST_TYPE, BODY, PARAMS) => {
  if (REQUEST_TYPE === 'get') {
    return METHODS.GET(`${PATHS.GET}?${PARAMS}`);
  }
  if (REQUEST_TYPE === 'post') {
    return METHODS.POST(`${PATHS.POST}?${PARAMS}`, BODY);
  }
  if (REQUEST_TYPE === 'put') {
    return METHODS.PUT(`${PATHS.PUT}/${PARAMS}`, BODY);
  }
  if (REQUEST_TYPE === 'delete') {
    return METHODS.DELETE(`${PATHS.DELETE}/${PARAMS}`, BODY);
  }
  if (REQUEST_TYPE === 'toggle') {
    return METHODS.PUT(`${PATHS.TOGGLE}/${PARAMS}`, BODY);
  }
  return false;
};

export default Example;
