import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { find } from 'lodash';

import {
  fontSize
} from 'common/styles/style';



const TourneyChooser = props => {

  const { tourney, tourneys, updateTourney } = props;
  const t = find(tourneys, {id: tourney});
  const label = (t && t.label)
    ? t.label
    : '';
  //console.log('label', label);

  const options = tourneys.map(t => {
    return (
      <MenuOption
        value={t.id}
        key={t.key}
      >
         <Text style={styles.tourneyOptionsText}>
          {t.label}
         </Text>
      </MenuOption>
    );
  });


  return (
    <Menu onSelect={value => {
      //console.log('selected ' + value);
      updateTourney(value);
    }}>
      <MenuTrigger
        style={styles.chooserContainer}
      >
        <Text style={styles.tourneyTxt}>{label}</Text>
        <Icon
          size={30}
          color='#eee'
          name='menu-down'
        />
      </MenuTrigger>
      <MenuOptions
        customStyles={{optionsContainer: styles.optionsContainer}}
      >
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
    color: "#eee",
    fontSize: fontSize+4,
    fontWeight: 'bold',
  },
  tourneyOptionsContainer: {
    padding: 10,
  },
  tourneyOptionsText: {
    fontWeight: 'bold',
  },
  optionsContainer: {
    width: '40%',
  },
});