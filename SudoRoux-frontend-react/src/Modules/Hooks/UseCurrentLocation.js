import { useEffect, useState } from 'react';

function UseCurrentLocation() {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    fetch('https://geolocation-db.com/json/')
      .then((res) => res.json())
      .then((res) => setLocation(res));
  }, []);
  return { location };
}

export default UseCurrentLocation;
