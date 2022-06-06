import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import YearChooser from './yearChooser';
import TourneyChooser from './tourneyChooser';

const Header = props => {
  const {year, years, updateYear, tourney, tourneys, updateTourney} = props;

  return (
    <View style={styles.hdr}>
      <View style={styles.hdrYear}>
        <YearChooser year={year} years={years} updateYear={updateYear} />
      </View>
      <View style={styles.hdrTourney}>
        <TourneyChooser
          tourney={tourney}
          tourneys={tourneys}
          updateTourney={updateTourney}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  hdr: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
