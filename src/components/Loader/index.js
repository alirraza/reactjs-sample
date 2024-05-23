import React from 'react';

import LoaderWrapper from './style';

const Index = () => (
  <LoaderWrapper>
    <div className="loader" id="loader">
      <div id="box" />
      <div id="shadow" />
      <p>Connecting...</p>
    </div>
  </LoaderWrapper>
);

export default Index;
