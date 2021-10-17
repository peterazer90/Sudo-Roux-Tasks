import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({
  children, clickEvent, isDisabled, className,
}) {
  return (
    <button
      type="button"
      onClick={clickEvent}
      disabled={isDisabled}
      className={classNames('py-1.5 px-2 capitalize', isDisabled && 'opacity-50', className)}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
};
Button.defaultProps = {
  isDisabled: false,
  className: null,
};
export default Button;
