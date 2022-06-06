import React from 'react';

import StackNav from 'common/components/stack_nav';
import ScheduleScreen from 'features/schedule/schedule';

const ScheduleStack = props => {
  return <StackNav screen={ScheduleScreen} title="Schedule" />;
};

export default ScheduleStack;
