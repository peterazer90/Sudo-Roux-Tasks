import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationIcon } from '@heroicons/react/outline';

function FeedBacks({ validation, feedBack }) {
  const iconClassAttrs = 'right-0 top-0 absolute mt-2.5 pr-2';
  const messageClassAttrs = 'w-full block py-0.5 text-left capitalize';

  return (
    <>
      {validation === 'warning' && (<small className={classNames('text-yellow-600', messageClassAttrs)}>{feedBack.warning}</small>)}
      {validation === 'invalid' && (<small className={classNames('text-red-600', messageClassAttrs)}>{feedBack.invalid}</small>)}
      {validation === 'success' && (<small className={classNames('text-green-600', messageClassAttrs)}>{feedBack.success}</small>)}

      {validation === 'warning' && (<span className={classNames('text-yellow-600', iconClassAttrs)}><ExclamationIcon /></span>)}
      {validation === 'invalid' && (<span className={classNames('text-red-600', iconClassAttrs)}><ExclamationCircleIcon /></span>)}
      {validation === 'success' && (<span className={classNames('text-green-600', iconClassAttrs)}><CheckCircleIcon /></span>)}
    </>
  );
}
FeedBacks.propTypes = {
  validation: PropTypes.string.isRequired,
  feedBack: PropTypes.shape(
    { warning: PropTypes.string, invalid: PropTypes.string, success: PropTypes.string },
  ).isRequired,
};
export default FeedBacks;
