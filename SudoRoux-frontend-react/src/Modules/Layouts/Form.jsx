import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Form({ className, submitFeedBack, children }) {
  return (
    <form className={classNames('w-full', className)}>
      {children}
      {submitFeedBack && (
        <div className="w-full text-left text-red-600 font-medium mt-3">
          {submitFeedBack}
        </div>
      )}
    </form>
  );
}

Form.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  submitFeedBack: PropTypes.oneOf([PropTypes.string, null]),
  children: PropTypes.node.isRequired,
};
Form.defaultProps = {
  className: null,
  submitFeedBack: null,
};
export default Form;
