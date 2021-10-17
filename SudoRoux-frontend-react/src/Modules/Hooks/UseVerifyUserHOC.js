import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function UseVerifyUserHOC(WrappedComponent) {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(async () => {
      const accessToken = localStorage.getItem('locale');
      if (!accessToken) Router.replace('/sign-in');
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default UseVerifyUserHOC;
