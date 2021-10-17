import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { data } from 'autoprefixer';
import FeedBacks from './Parts/FeedBacks';
import Typography from '../Content/Typography';

function Text({
  className, name, type, placeHolder, value,
  validation, feedBack, changeEvent, focusEvent, blurEvent, hasLabel,
}) {
  return (
    <label htmlFor={name} className="block pb-1 relative">
      {hasLabel && <Typography type="p" className="mb-1">{placeHolder}</Typography>}
      <input
        className={classNames('rounded h-12 w-full px-2 text-sm focus-within:outline-none',
          className,
          !validation && 'border-gray-300',
          validation === 'warning' && 'border-yellow-600',
          validation === 'invalid' && 'border-red-600',
          validation === 'success' && 'border-green-600')}
        id={name}
        type={type}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={changeEvent}
        onFocus={focusEvent}
        onBlur={blurEvent}
      />
      <FeedBacks
        validation={validation}
        feedBack={feedBack}
      />
    </label>
  );
}

Text.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['email', 'text', 'number', 'password', 'file', 'date']).isRequired,
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  validation: PropTypes.oneOf(['warning', 'invalid', 'success', '']).isRequired,
  feedBack: PropTypes.shape(
    { invalid: PropTypes.string, success: PropTypes.string },
  ).isRequired,
  changeEvent: PropTypes.func.isRequired,
  focusEvent: PropTypes.func,
  blurEvent: PropTypes.func.isRequired,
  hasLabel: PropTypes.bool,
};
Text.defaultProps = {
  className: null,
  focusEvent: () => {},
  hasLabel: false,
};
export default Text;
