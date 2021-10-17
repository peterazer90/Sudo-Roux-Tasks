import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Row({
  align, justify, direction, className, children, isFlexWrapped,
}) {
  return (
    <div className={classNames(
      'flex',
      align && `items-${align}`,
      justify && `justify-${justify}`,
      `flex-${direction}`,
      isFlexWrapped && 'flex-wrap',
      className,
    )}
    >
      {children}
    </div>
  );
}
Row.propTypes = {
  align: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'baseline', false]),
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly', false]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['row', 'col', 'row-reverse', 'col-reverse']),
  isFlexWrapped: PropTypes.bool,
};
Row.defaultProps = {
  align: false,
  justify: false,
  className: null,
  direction: 'row',
  isFlexWrapped: true,
};
export default Row;
