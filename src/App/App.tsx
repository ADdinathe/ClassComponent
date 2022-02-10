import * as React from 'react';
import styled from 'styled-components';

import MainComponent from '../components/MainComponent';
import 'styles/styles.scss';
const MainBody = styled.div`
  width: 100%;
  height: 100px;
`;
const App: React.FC = () => (
  <MainBody>
    <MainComponent />
  </MainBody>
);

export default App;
