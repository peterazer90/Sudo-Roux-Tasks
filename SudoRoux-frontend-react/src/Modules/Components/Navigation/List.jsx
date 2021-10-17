import React from 'react';
import PropTypes from 'prop-types';
import Anchor from './Anchor';
import Row from '../Layout/Row';

function List({
  path, children, hasSeparator, icon, className, title, as,
}) {
  return (
    <li className={className}>
      <Anchor href={path} title={title} as={as}>
        <Row align="center">
          {icon && (
          <>
            {icon}
            <span className="px-0.5" />
          </>
          )}
          <span>{children}</span>
        </Row>
      </Anchor>
      {hasSeparator && <div className="h-2 border-l border-gray-200 mx-2" />}
    </li>
  );
}

List.propTypes = {
  path: PropTypes.string.isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  hasSeparator: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
};
List.defaultProps = {
  as: false,
  className: null,
  title: null,
  hasSeparator: false,
  icon: false,
};
export default List;
