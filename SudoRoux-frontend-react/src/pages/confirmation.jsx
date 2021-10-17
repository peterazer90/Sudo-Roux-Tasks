import React from 'react';
import { Content, Layout } from '../Modules/Components';

function Confirmation() {
  return (
    <Layout.Container className="h-full">
      <Layout.Row align="center" justify="center" className="h-full">
        <Content.Typography type="h1" className="text-green-500">
          Your changes have been saved successfully
        </Content.Typography>
      </Layout.Row>
    </Layout.Container>
  );
}

export default Confirmation;
