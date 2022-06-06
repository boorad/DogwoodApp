import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {fontSize} from 'common/styles/style';

const YearChooser = props => {
  const {year, years, updateYear} = props;

  const options = years
    .sort()
    .reverse()
    .map(y => {
      return (
        <MenuOption value={y} key={y}>
          <Text style={styles.yearOptionsText}>{y}</Text>
        </MenuOption>
      );
    });

  return (
    <Menu
      onSelect={value => {
        //console.log('selected ' + value);
        updateYear(value);
      }}>
      <MenuTrigger style={styles.chooserContainer}>
        <Text style={styles.yearTxt}>{year}</Text>
        <Icon size={30} color="#eee" name="menu-down" />
      </MenuTrigger>
      <MenuOptions customStyles={{optionsContainer: styles.optionsContainer}}>
        {options}
      </MenuOptions>
    </Menu>
  );
};

export default YearChooser;

const styles = StyleSheet.create({
  chooserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  yearTxt: {
    color: '#eee',
    fontSize: fontSize + 4,
    fontWeight: 'bold',
  },
  yearOptionsContainer: {
    padding: 10,
  },
  yearOptionsText: {
    fontWeight: 'bold',
  },
  optionsContainer: {
    width: '40%',
  },
});
