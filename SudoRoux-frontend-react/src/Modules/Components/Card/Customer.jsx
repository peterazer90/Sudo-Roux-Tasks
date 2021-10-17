import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import Content from '../Content';

function Customer({ title, content, image }) {
  return (
    <Layout.Col className="p-2 w-full" lg="1/4" md="1/2">
      <figure className="border p-5 rounded text-center text-gray-600">
        <div className="w-20 h-20 mx-auto">
          <Content.Picture alt={title} src={image} height={10} width={10} />
        </div>
        <figcaption>
          <Content.Typography type="h3" className="py-3">
            {title}
          </Content.Typography>
          <Content.Typography type="p">
            {content}
          </Content.Typography>
        </figcaption>
      </figure>
    </Layout.Col>
  );
}
Customer.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Customer;
