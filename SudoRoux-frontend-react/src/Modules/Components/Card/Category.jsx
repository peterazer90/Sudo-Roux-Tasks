import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';

function Category({ title, content, image }) {
  return (
    <figure className="border py-10 rounded text-center text-white bg-black relative">
      <div className="absolute top-0 left-0 bottom-0 right-0 opacity-70">
        <Content.Picture
          alt={title}
          src={image}
          layout="fill"
        />
      </div>
      <figcaption className="z-10 relative">
        <Content.Typography type="h3">
          {title}
        </Content.Typography>
        <Content.Typography type="p">
          {content}
        </Content.Typography>
      </figcaption>
    </figure>
  );
}
Category.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Category;
