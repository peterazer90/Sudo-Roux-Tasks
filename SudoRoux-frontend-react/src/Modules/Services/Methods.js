import Axios from 'axios';
import CONFIG from './Config';
import { LocalStorage } from '../Helpers';

const checkTokenExpired = (response) => response.data.statusCode === 614 && LocalStorage.REMOVE('userData');
/// /////////////////////////////////////////////////////////////////////////
const POST = (url, body) => Axios.post(url, body, CONFIG.HEADER())
  .then((response) => response)
  .catch(({ response }) => {
    checkTokenExpired(response);
    return response;
  });
/// /////////////////////////////////////////////////////////////////////////
const GET = (url) => Axios.get(url, CONFIG.HEADER())
  .then((response) => response)
  .catch(({ response }) => {
    checkTokenExpired(response);
    return response;
  });
/// /////////////////////////////////////////////////////////////////////////
const PUT = (url, body) => Axios.put(url, body, CONFIG.HEADER())
  .then((response) => response)
  .catch(({ response }) => {
    checkTokenExpired(response);
    return response;
  });
/// /////////////////////////////////////////////////////////////////////////
const DELETE = (url) => Axios.delete(url, CONFIG.HEADER())
  .then((response) => response)
  .catch(({ response }) => {
    checkTokenExpired(response);
    return response;
  });
/// /////////////////////////////////////////////////////////////////////////
export default {
  POST,
  GET,
  PUT,
  DELETE,
};
