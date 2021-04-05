import React from 'react';

import StackNav from 'common/components/stack_nav';
import AboutScreen from 'features/about/about';



const AboutStack = props => {
  return (
    <StackNav
      screen={AboutScreen}
      title='About'
    />
  );
};

export default AboutStack;
