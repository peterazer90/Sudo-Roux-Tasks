import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Col({
  sm, md, lg, xl, xxl, className, children,
}) {
  return (
    <div className={classNames(
      sm && `sm:w-${sm}`,
      md && `md:w-${md}`,
      lg && `lg:w-${lg}`,
      xl && `xl:w-${xl}`,
      xxl && `2xl:w-${xxl}`,
      className,
    )}
    >
      {children}
    </div>
  );
}
Col.propTypes = {
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  xl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  xxl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  children: PropTypes.node.isRequired,
};

Col.defaultProps = {
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
  className: null,
};
export default Col;
