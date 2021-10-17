import React from 'react';
import PropTypes from 'prop-types';
import { StarIcon } from '@heroicons/react/solid';
import Content from '../Content';
import Typography from '../Content/Typography';
import Row from '../Layout/Row';
import Col from '../Layout/Col';
import Anchor from '../Navigation/Anchor';

function Review({
  name, content, image, location,
}) {
  return (
    <figure className="rounded-3xl text-center bg-white text-gray-600 h-full p-5">
      <div className="w-10 mx-auto">
        <Content.Picture
          alt={name}
          src="/images/comma.png"
          width={100}
          height={100}
        />
      </div>
      <figcaption className="text-center py-5">
        <Content.Typography type="p">
          {content}
        </Content.Typography>
        <Row justify="center" className="pt-5">
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
        </Row>
      </figcaption>
      <div className="h-40 w-40 mx-auto">
        <Content.Picture
          alt={name}
          src={image}
          width={100}
          height={100}
        />
      </div>
      <div className="text-center pt-5">
        <Content.Typography type="h4">
          {name}
        </Content.Typography>
        <Content.Typography type="h5" weight="light">
          {location}
        </Content.Typography>
      </div>
    </figure>
  );
}
Review.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default Review;
