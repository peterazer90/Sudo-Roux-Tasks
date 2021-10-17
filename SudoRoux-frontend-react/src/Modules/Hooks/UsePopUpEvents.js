import { useEffect, useState } from 'react';

function UsePopUpEvents() {
  const [active, setActive] = useState(false);
  const [data, setData] = useState(null);
  /// ////////////////////////////////////////////////////////////////////
  useEffect(() => {
    let body = document.querySelector('body');
    body = body.classList;
    if (active) body.add('overflow-hidden');
    else body.remove('overflow-hidden');
  }, [active]);
  /// ////////////////////////////////////////////////////////////////////
  return {
    active, setActive, data, setData,
  };
}

export default UsePopUpEvents;
