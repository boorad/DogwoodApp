import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



  const Header = props => {

    const { data, updateYear, updateTourney } = props;

    return (
      <View><Text>header</Text></View>
    );


    const options = years.sort().reverse().map(y => {

      let tourneyOptions = tourneys.map(t => (
        <MenuOption
          onSelect={() => _setSelection(y, t.id)}
          text={t.label}
          key={y + '_' + t.id}
        />
      ));

      return (
        <View style={styles.yearOptionsContainer} key={y}>
        <Text style={styles.yearOptionsText}>{y}</Text>
        {tourneyOptions}
        <View style={{borderBottomColor: '#999',borderBottomWidth:1}} />
        </View>
      );
    });

    return (
      <View style={styles.hdr}>
        <View style={styles.hdrLabel}>
          <Text style={styles.hdrLabelText}>{label}</Text>
        </View>
      </View>
    );
  };

export default Header;


const styles = StyleSheet.create({

});


  /*
          <View style={styles.hdrMore}>
          <Menu>
            <MenuTrigger>
              <Icon
                size={24}
                color='#eee'
                name='dots-vertical'
              />
            </MenuTrigger>
            <MenuOptions
              customStyles={{optionsContainer: styles.optionsContainer}}
            >
              {options}
            </MenuOptions>
          </Menu>
        </View>
*/