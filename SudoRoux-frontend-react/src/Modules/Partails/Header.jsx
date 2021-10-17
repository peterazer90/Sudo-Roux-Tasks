import React from 'react';
import { UsePopUpEvents } from '../Hooks';

function Header() {
  const navigation = [
    {
      path: '/',
      title: 'Home',
      text: 'home',
    },
  ];
  const { active, setActive } = UsePopUpEvents();

  return (
    <header className="w-full bg-white">
    </header>
  );
}

export default Header;
