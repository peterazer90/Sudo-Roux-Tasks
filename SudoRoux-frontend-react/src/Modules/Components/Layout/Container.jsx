import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Container({ children, className }) {
  return (
    <div className={classNames('container mx-auto', className)}>
      {children}
    </div>
  );
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
};
Container.defaultProps = {
  className: null,
};
export default Container;
