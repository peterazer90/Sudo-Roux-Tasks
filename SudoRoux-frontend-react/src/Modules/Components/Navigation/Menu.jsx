import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Menu({ children, className, direction }) {
  return (
    <ul className={classNames(
      'flex capitalize',
      `flex-${direction}`,
      direction !== 'col' && 'flex-wrap',
      className,
    )}
    >
      {children}
    </ul>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  direction: PropTypes.oneOf(['row', 'col', 'row-reverse', 'col-reverse']),
};
Menu.defaultProps = {
  className: null,
  direction: 'row',
};
export default Menu;
