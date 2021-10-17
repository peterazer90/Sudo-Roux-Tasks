import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from './Text';
import SelectCountryCode from './SelectCountryCode';

function Phone({
  labelClassName, inputClassName, name, placeHolder, value,
  validation, feedBack, changeEvent, focusEvent, blurEvent, countryEvent,
}) {
  return (
    <div className="relative">
      <Text
        labelClassName={labelClassName}
        className={classNames('pl-20 border', inputClassName)}
        name={name}
        type="number"
        placeHolder={placeHolder}
        value={value}
        validation={validation}
        feedBack={feedBack}
        changeEvent={changeEvent}
        focusEvent={focusEvent}
        blurEvent={blurEvent}
        hasLabel
      />
      <SelectCountryCode
        className="absolute left-2 top-9 h-8 w-16 text-sm"
        countryEvent={countryEvent}
      />
    </div>
  );
}
Phone.propTypes = {
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  validation: PropTypes.oneOf(['warning', 'invalid', 'success', '']).isRequired,
  feedBack: PropTypes.shape(
    { warning: PropTypes.string, invalid: PropTypes.string, success: PropTypes.string },
  ).isRequired,
  changeEvent: PropTypes.func.isRequired,
  focusEvent: PropTypes.func,
  blurEvent: PropTypes.func.isRequired,
  countryEvent: PropTypes.func.isRequired,

};
Phone.defaultProps = {
  labelClassName: '',
  inputClassName: '',
  focusEvent: () => {},
};
export default Phone;
