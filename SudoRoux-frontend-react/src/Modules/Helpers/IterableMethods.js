const Find = (arr, key, value) => arr.find((item) => item[key] === value);
const Filter = (arr, key, value) => arr.filter((item) => item[key] === value);
const Every = (arr, key, value) => arr.every((item) => item[key] === value);
const Some = (arr, key, value) => arr.some((item) => item[key] === value);

export default {
  Find,
  Filter,
  Every,
  Some,
};
