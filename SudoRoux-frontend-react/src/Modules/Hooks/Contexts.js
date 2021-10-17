import { createContext } from 'react';

const TRANSLATION = createContext('en');
const HEADER = createContext(null);
const HOME = createContext(null);

export default {
  TRANSLATION,
  HEADER,
  HOME,
};
