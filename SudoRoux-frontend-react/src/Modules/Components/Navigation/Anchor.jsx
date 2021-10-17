import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Anchor({
  href, passHref, as, title, children, className,
}) {
  return (
    <Link href={href} passHref={passHref} as={as}>
      <a href={href} title={title} className={classNames('rounded', className)}>
        {children}
      </a>
    </Link>
  );
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  passHref: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
};

Anchor.defaultProps = {
  passHref: true,
  className: null,
  as: false,
  title: null,
};
export default Anchor;
