import React from 'react';
import PropTypes from 'prop-types';
import { ClockIcon } from '@heroicons/react/outline';
import Content from '../Content';
import Row from '../Layout/Row';
import Typography from '../Content/Typography';
import Anchor from '../Navigation/Anchor';

function Blog({ title, content, image }) {
  return (
    <figure className="bg-white text-gray-600 h-full">
      <div className="h-40 w-full relative overflow-hidden rounded">
        <Content.Picture
          alt={title}
          src={image}
          layout="fill"
        />
      </div>
      <figcaption className="py-4 text-left">
        <Content.Typography type="h4">
          {title}
        </Content.Typography>
        <Typography type="small" className="block text-gray-400">
          <Row align="center">
            <ClockIcon className="w-3 h-3" />
            <span className="px-0.5" />
            Nov 10, 2020
          </Row>
        </Typography>
        <Content.Typography type="p" className="pt-3">
          {content}
        </Content.Typography>
      </figcaption>
      <Anchor href="/" className="text-green text-right block">Read More</Anchor>
    </figure>
  );
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Blog;
