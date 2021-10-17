import { LocalStorage } from '../Helpers/index';

const API_URL = 'https://example.com/api';
/// /////////////////////////////////////////////////////////////////////////

const URLS = {
  ADMIN: `${API_URL}admin`,
  CLIENT: `${API_URL}client`,
  PROVIDER: `${API_URL}provider`,
};

/// /////////////////////////////////////////////////////////////////////////

const HEADER = () => {
  const userData = LocalStorage.GET('userData');
  return {
    headers: {
      token: userData ? `Bearer ${userData.data.authToken}` : '',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
};
/// /////////////////////////////////////////////////////////////////////////
export default {
  URLS,
  HEADER,
};
