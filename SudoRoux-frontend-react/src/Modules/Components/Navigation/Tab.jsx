import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu from './Menu';
import Button from '../Field/Button';

function Tab({
  list, panels, className, parentClass, activeColor,
}) {
  const [active, setActive] = useState(0);
  return (
    <>
      <Menu className={classNames('mb-8', parentClass)}>
        {list.map((item, index) => (
          <li key={item.id} className={classNames(className, active === index && activeColor)}>
            <Button
              clickEvent={() => setActive(index)}
              className="text-sm"
            >
              {item.title}
            </Button>
          </li>
        ))}
      </Menu>
      {panels.map((panel, index) => (
        <div key={index} className={classNames(index !== active && 'hidden')}>
          {panel}
        </div>
      ))}
    </>
  );
}

Tab.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  panels: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  parentClass: PropTypes.string.isRequired,
};
export default Tab;
