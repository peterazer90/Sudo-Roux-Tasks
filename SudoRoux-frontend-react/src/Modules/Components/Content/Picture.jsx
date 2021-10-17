import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import classNames from 'classnames';

const imageLoader = ({ src, width, quality }) => `https://peterazer.com/tasks/inovola${src}?w=${width}&q=${quality || 75}`;

function Picture({
  src, width, height, layout, className, alt,
}) {
  return (
    <div className={classNames('h-full w-full', layout === 'fill' && 'overflow-hidden relative', className)}>
      <Image
        src={src}
        loader={imageLoader}
        layout={layout}
        alt={alt}
        width={width}
        height={height}
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  layout: PropTypes.oneOf(['responsive', 'fill']),
};

Picture.defaultProps = {
  width: false,
  height: false,
  className: null,
  layout: 'responsive',
};
export default Picture;
