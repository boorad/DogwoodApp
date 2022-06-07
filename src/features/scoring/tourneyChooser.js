import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {StyleSheet, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {find} from 'lodash';
import {fontSize} from 'common/styles/style';

const TourneyChooser = props => {
  const {tourney, tourneys, updateTourney} = props;
  const t = find(tourneys, {name: tourney});
  // console.log('t', t, tourney);
  const label = t && t.name ? t.name : '';
  // console.log('label', label);
  // console.log('tourneys', tourneys);

  const options = tourneys.map((lt, i) => {
    return (
      <MenuOption value={lt.name} key={i}>
        <Text style={styles.tourneyOptionsText}>{lt.name}</Text>
      </MenuOption>
    );
  });

  return (
    <Menu
      onSelect={value => {
        //console.log('selected ' + value);
        updateTourney(value);
      }}>
      <MenuTrigger style={styles.chooserContainer}>
        <Text style={styles.tourneyTxt}>{label}</Text>
        <Icon size={30} color="#eee" name="menu-down" />
      </MenuTrigger>
      <MenuOptions customStyles={{optionsContainer: styles.optionsContainer}}>
        {options}
      </MenuOptions>
    </Menu>
  );
};

export default TourneyChooser;

const styles = StyleSheet.create({
  chooserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tourneyTxt: {
    color: '#eee',
    fontSize: fontSize + 2,
    fontWeight: 'bold',
  },
  tourneyOptionsContainer: {
    padding: 10,
  },
  tourneyOptionsText: {
    fontWeight: 'bold',
  },
  optionsContainer: {
    width: '60%',
  },
});
