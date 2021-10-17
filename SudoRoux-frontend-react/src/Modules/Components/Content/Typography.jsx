import { createElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Typography({
  size, weight, type, children, className,
}) {
  const elements = [
    {
      type: 'h1',
      size: !size && '3xl',
      weight: !weight && 'bold',
    },
    {
      type: 'h2',
      size: !size && '2xl',
      weight: !weight && 'bold',
    },
    {
      type: 'h3',
      size: !size && 'xl',
      weight: !weight && 'bold',
    },
    {
      type: 'h4',
      size: !size && 'lg',
      weight: !weight && 'bold',
    },
    {
      type: 'h5',
      size: !size && 'base',
      weight: !weight && 'bold',
    },
    {
      type: 'h6',
      size: !size && 'sm',
      weight: !weight && 'bold',
    },
    {
      type: 'p',
      size: !size && 'base',
      weight: !weight && 'light',
    },
    {
      type: 'strong',
      size: !size && 'base',
      weight: !weight && 'extra-bold',
    },
    {
      type: 'b',
      size: !size && 'base',
      weight: !weight && 'normal',
    },
    {
      type: 'small',
      size: !size && 'xs',
      weight: !weight && 'normal',
    },
  ];
  const element = elements.find((elm) => elm.type === type);
  return createElement(
    type,
    { className: classNames(className, `font-${weight || element.weight}`, `text-${size || element.size}`) },
    children,
  );
}
Typography.propTypes = {
  size: PropTypes.oneOfType(
    [
      PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']),
      PropTypes.bool,
    ],
  ),
  weight: PropTypes.oneOfType(
    [
      PropTypes.oneOf(['light', 'normal', 'bold', 'extrabold']),
      PropTypes.bool,
    ],
  ),
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'strong', 'b', 'small', 'span']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
};

Typography.defaultProps = {
  className: null,
  size: false,
  weight: false,
};
export default Typography;
