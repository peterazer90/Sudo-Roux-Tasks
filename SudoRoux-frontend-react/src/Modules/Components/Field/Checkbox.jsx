import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '../Content/Typography';

function Checkbox({
  className, name, placeHolder, value, changeEvent, checked,
}) {
  return (
    <label
      htmlFor={name}
      className={classNames('w-full h-12 flex items-center cursor-pointer mb-1')}
    >
      <input
        className={classNames('mr-2', className)}
        checked={checked}
        id={name}
        type="checkbox"
        name={name}
        value={value}
        onChange={changeEvent}
      />
      <Typography type="p">{placeHolder}</Typography>
    </label>
  );
}
Checkbox.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  changeEvent: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};
Checkbox.defaultProps = {
  className: null,
};
export default Checkbox;
