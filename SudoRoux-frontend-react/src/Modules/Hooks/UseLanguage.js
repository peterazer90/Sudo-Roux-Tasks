import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LocalStorage } from '../Helpers';

function UseLanguage() {
  const [language, setLanguage] = useState('en');
  const router = useRouter();

  useEffect(() => {
    const lang = LocalStorage.GET('language');
    if (!lang) LocalStorage.SET('language', language);
    else {
      setLanguage(lang);
      if (lang !== 'en') {
        router.push(router.pathname, router.pathname, {
          locale: 'ar',
          defaultLocale: 'ar',
          shallow: true,
        });
      }
    }
  }, [language]);
  return { language, setLanguage };
}

export default UseLanguage;
