import React from 'react';

import StackNav from 'common/components/stack_nav';
import HistoryScreen from 'features/history/history';

const HistoryStack = props => {
  return <StackNav screen={HistoryScreen} title="History" />;
};

export default HistoryStack;
