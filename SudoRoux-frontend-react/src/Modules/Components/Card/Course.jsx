import React from 'react';
import PropTypes from 'prop-types';
import { StarIcon } from '@heroicons/react/solid';
import Content from '../Content';
import Row from '../Layout/Row';
import Col from '../Layout/Col';
import Typography from '../Content/Typography';
import Anchor from '../Navigation/Anchor';

function Course({ title, content, image }) {
  return (
    <figure className="border rounded text-center relative bg-white overflow-hidden text-gray-600 h-full">
      <div className="h-40 w-full">
        <Content.Picture
          alt={title}
          src={image}
          layout="fill"
        />
      </div>
      <figcaption className="p-4 text-left">
        <Content.Typography type="h4">
          {title}
        </Content.Typography>
        <Content.Typography type="p" className="pt-3">
          {content}
        </Content.Typography>
      </figcaption>
      <Row align="center" className="px-3">
        <Col>
          <StarIcon className="w-5 h-5 text-yellow-400" />
        </Col>
        <Col>
          <StarIcon className="w-5 h-5 text-yellow-400" />
        </Col>
        <Col>
          <StarIcon className="w-5 h-5 text-yellow-400" />
        </Col>
        <Col>
          <StarIcon className="w-5 h-5 text-yellow-400" />
        </Col>
        <Col>
          <StarIcon className="w-5 h-5 text-gray-200" />
        </Col>
        <Col>
          <Typography type="small" className="text-gray-500"> ( 400 )</Typography>
        </Col>
      </Row>
      <Row align="center" justify="between" className="p-4">
        <Col md="1/2" className="w-full">
          <Row align="center">
            <Typography type="strong">$16.00 </Typography>
            <span className="px-0.5" />
            <Typography type="p" className="text-gray-500 line-through">$35.00</Typography>
          </Row>
        </Col>
        <Col md="1/2" className="w-full">
          <Anchor href="/" className="p-3 block bg-gradient-to-r from-red-400 to-yellow-500 text-white">Enroll Now</Anchor>
        </Col>
      </Row>
    </figure>
  );
}
Course.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Course;
