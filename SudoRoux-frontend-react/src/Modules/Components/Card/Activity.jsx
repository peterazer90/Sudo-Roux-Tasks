import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';
import Row from '../Layout/Row';
import Col from '../Layout/Col';
import Typography from '../Content/Typography';
import Anchor from '../Navigation/Anchor';

function Activity({ title, content, image }) {
  return (
    <figure className="border rounded text-center bg-white text-gray-600 h-full p-4">
      <div className="h-40 w-full relative overflow-hidden rounded">
        <Content.Picture
          alt={title}
          src={image}
          width={100}
          height={100}
        />
      </div>
      <figcaption className="text-left py-3">
        <Content.Typography type="h4">
          {title}
        </Content.Typography>
        <hr className="border-t my-2" />
        <Typography type="small" className="mb-3 block text-gray-400">Nov Tue 2021 @9:00 AM-04:00 PM</Typography>
        <Content.Typography type="p">
          {content}
        </Content.Typography>
      </figcaption>
      <Row align="center" justify="between">
        <Row align="center">
          <Typography type="strong">$16.00</Typography>
          <span className="px-0.5" />
          <Typography type="p" className="text-gray-500 line-through">$35.00</Typography>
        </Row>
        <Col>
          <Anchor href="/" className="p-3 block bg-gradient-to-r from-red-400 to-yellow-500 text-white">Participation</Anchor>
        </Col>
      </Row>
    </figure>
  );
}
Activity.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Activity;
