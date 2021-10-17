import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import Content from '../Content';

function Feature({ title, image, content }) {
  return (
    <Layout.Col md="auto" className="w-full p-2">
      <Layout.Row align="center" className="-mx-2">
        <Layout.Col className="w-20 px-2">
          <Content.Picture
            alt={title}
            width={100}
            height={100}
            src={image}
          />
        </Layout.Col>
        <Layout.Col>
          <Content.Typography type="h2">
            {title}
          </Content.Typography>
          <Content.Typography type="p">
            {content}
          </Content.Typography>
        </Layout.Col>
      </Layout.Row>
    </Layout.Col>
  );
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Feature;
