import React from 'react';
import classNames from 'classnames';
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';

const isDisabled = (str) => str.includes('slick-disabled');

function NextArrow({ className, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames('absolute top-0 bottom-0 z-50 right-0 sm:-mr-6 -mr-3 text-green',
        isDisabled(className) && 'hidden')}
    >
      <div className="rounded-full bg-white w-14 h-14">
        <ArrowCircleRightIcon />
      </div>
    </button>
  );
}

function PrevArrow({ className, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames('absolute top-0 bottom-0 z-50 left-0 sm:-ml-6 -ml-3 text-green',
        isDisabled(className) && 'hidden')}
    >
      <div className="rounded-full bg-white w-14 h-14">
        <ArrowCircleLeftIcon />
      </div>
    </button>
  );
}

export default {
  NextArrow,
  PrevArrow,
};
