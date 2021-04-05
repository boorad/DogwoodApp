import React from 'react';

import StackNav from 'common/components/stack_nav';
import LeaderboardScreen from 'features/scoring/leaderboard';



const LeaderboardStack = props => {
  return (
    <StackNav
      screen={LeaderboardScreen}
      title='Leaderboard'
    />
  );
};

export default LeaderboardStack;
