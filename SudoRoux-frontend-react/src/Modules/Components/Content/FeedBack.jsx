import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from './Typography';
import { IterableMethods } from '../../Helpers';

function FeedBack({
  type, children, className, color,
}) {
  const colorClasses = [
    {
      type: 'primary',
      class: type === 'text' ? 'text-blue-500' : 'bg-blue-500 text-blue-800',
    },
    {
      type: 'danger',
      class: type === 'text' ? 'text-red-500' : 'bg-red-500 text-red-800',
    },
    {
      type: 'warning',
      class: type === 'text' ? 'text-Yellow-500' : 'bg-Yellow-500 text-Yellow-800',
    },
  ];
  const theColor = IterableMethods.Find(colorClasses, 'type', color);
  return (
    <div className={classNames('', theColor.class, className)}>
      <Typography type="b">
        {children}
      </Typography>
    </div>
  );
}
FeedBack.propTypes = {
  type: PropTypes.oneOf(['text', 'content']),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  color: PropTypes.oneOf(['primary', 'warning', 'danger']).isRequired,
};
FeedBack.defaultProps = {
  type: 'text',
  className: null,
};
export default FeedBack;
