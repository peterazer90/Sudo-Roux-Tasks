import { useLayoutEffect, useState } from 'react';

function UseWindowAPI(key) {
  const [value, setValue] = useState();

  useLayoutEffect(() => {
    setValue(window[key]);
  }, []);

  return [value, setValue];
}

export default UseWindowAPI;
