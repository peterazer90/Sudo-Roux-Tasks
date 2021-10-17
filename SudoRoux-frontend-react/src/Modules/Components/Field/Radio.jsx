import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '../Content/Typography';

function Radio({
  className, name, placeHolder, value, changeEvent, checked, image,
}) {
  return (
    <label
      htmlFor={value}
      className={classNames('w-full h-12 flex items-center justify-center cursor-pointer rounded border border-gray-300 mb-1',
        checked && 'bg-green text-white')}
    >
      <img src={image} alt={placeHolder} className="pr-2" />
      <Typography type="p">{placeHolder}</Typography>
      <input
        className={classNames('hidden', className)}
        checked={checked}
        id={value}
        type="radio"
        name={name}
        value={value}
        onChange={changeEvent}
      />
    </label>
  );
}

Radio.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeEvent: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
};
Radio.defaultProps = {
  className: null,
};
export default Radio;
