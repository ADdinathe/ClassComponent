import * as React from 'react';

import ClassComponent from 'components/ClassComponent';

const MainComponent: React.FC = () => {
  return (
    <>
      <div>это написано в MainComponent</div>
      <ClassComponent name={'пеереданный вниз props'}>это children ClassComponent</ClassComponent>
    </>
  );
};

export default React.memo(MainComponent);
