import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { IterableMethods } from '../../Helpers';
import Flags from '../../Helpers/FlagIcons';
import { UseCurrentLocation } from '../../Hooks';
import { Navigation } from '../index';

const {
  EGYPT, LIBYA, ALGERIA, BAHRAIN, IRAQ, EMIRATES, JORDON, KUWAIT, LEBANON,
  MOROCCO, OMAN, QATAR, SAUDI, SUDAN, SYRIA, TUNISIA, YAMMEN, PALESTINE,
} = Flags;

function SelectCountryCode({ countryEvent, className }) {
  const [country, setCountry] = useState(null);
  const [visible, setVisible] = useState(false);
  const { location } = UseCurrentLocation();
  const countries = [
    {
      iso: 'EG',
      code: '+20',
      name: 'Egypt',
      icon: <EGYPT />,
    },
    {
      iso: 'SA',
      code: '+966',
      name: 'Saudi Arabia',
      icon: <SAUDI />,
    },
    {
      iso: 'TN',
      code: '+216',
      name: 'Tunisia',
      icon: <TUNISIA />,
    },
    {
      iso: 'MA',
      code: '+212',
      name: 'Morocco',
      icon: <MOROCCO />,
    },
    {
      iso: 'KW',
      code: '+965',
      name: 'Kuwait',
      icon: <KUWAIT />,
    },
    {
      iso: 'LB',
      code: '+961',
      name: 'Lebanon',
      icon: <LEBANON />,
    },
    {
      iso: 'SD',
      code: '+249',
      name: 'Sudan',
      icon: <SUDAN />,
    },
    {
      iso: 'DZ',
      code: '+213',
      name: 'Algeria',
      icon: <ALGERIA />,
    },
    {
      iso: 'AE',
      code: '+971',
      name: 'UAE',
      icon: <EMIRATES />,
    },
    {
      iso: 'JO',
      code: '+962',
      name: 'Jordan',
      icon: <JORDON />,
    },
    {
      iso: 'QA',
      code: '+974',
      name: 'Qatar',
      icon: <QATAR />,
    },
    {
      iso: 'BH',
      code: '+973',
      name: 'Bahrain',
      icon: <BAHRAIN />,
    },
    {
      iso: 'OM',
      code: '+968',
      name: 'Oman',
      icon: <OMAN />,
    },
    {
      iso: 'IQ',
      code: '+964',
      name: 'Iraq',
      icon: <IRAQ />,
    },
    {
      iso: 'SY',
      code: '+963',
      name: 'Syria',
      icon: <SYRIA />,
    },
    {
      iso: 'YE',
      code: '+969',
      name: 'Yemen',
      icon: <YAMMEN />,
    },
    {
      iso: 'LY',
      code: '+218',
      name: 'Libya',
      icon: <LIBYA />,
    },
    {
      iso: 'PS',
      code: '+972',
      name: 'Palestine',
      icon: <PALESTINE />,
    },
  ];
    /// /////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (location) {
      const defaultCountry = IterableMethods.Find(countries, 'iso', location.country_code);
      setCountry(defaultCountry);
      countryEvent({ country_code: defaultCountry.code, country_iso: defaultCountry.iso });
    }
  }, [location]);
  /// /////////////////////////////////////////////////////////////////////////////
  const onListClick = (code) => {
    const countrySelected = IterableMethods.Find(countries, 'code', code);
    setCountry(countrySelected);
    countryEvent({ country_code: countrySelected.code, country_iso: countrySelected.iso });
    setVisible(!visible);
  };
    /// /////////////////////////////////////////////////////////////////////////////
  return (
    <div onClick={() => setVisible(!visible)} className={classNames('z-10 bg-white', className)}>
      {country
            && (
            <div className="flex items-center rounded justify-center h-full cursor-pointer text-gray-500 hover:bg-gray-200">
              {country.icon}
              <span className="px-0.5 text-xs">{country.code}</span>
              <ChevronDownIcon className="w-3 h-3" />
            </div>
            )}
      <span className="border-r-2 border-gray-200 h-6 absolute right-0 top-1" />
      <Navigation.Menu
        direction="col"
        className={classNames('bg-white bg-white w-56 h-60 overflow-auto p-2 mt-2 border',
          !visible && 'hidden')}
      >
        {countries.map((item) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <li
            key={item.code}
            className="w-full flex items-center p-1 text-gray-500 cursor-pointer rounded-sm hover:bg-gray-200"
            onClick={() => onListClick(item.code)}
          >
            <span>{item.icon}</span>
            <span className="px-0.5" />
            <span>{item.name}</span>
            <span className="px-0.5" />
            <span>
              (
              {item.code}
              )
            </span>
          </li>
        ))}
      </Navigation.Menu>
    </div>
  );
}
SelectCountryCode.propTypes = {
  countryEvent: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
export default SelectCountryCode;
