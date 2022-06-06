import React from 'react';

import StackNav from 'common/components/stack_nav';
import PairingsScreen from 'features/scoring/pairings';

const PairingsStack = props => {
  return <StackNav screen={PairingsScreen} title="Pairings" />;
};

export default PairingsStack;
