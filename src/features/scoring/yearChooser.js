import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



const YearChooser = props => {

  const processYears = async (data) => {
    const now = moment();
    let y = now.year();

    // if we are before the qualifier date (midnight), show last year
    try {
      const current = find(data, {year: y.toString()});
      const qDate = moment(current.qualifier.date);
      if( now < qDate ) y = qDate.year() - 1;
    } catch(e) {}

    //  if year not in data, set to most recent year
    const yrs = data.map(yr => yr.year);
    if( yrs.indexOf(y.toString()) < 0 ) {
      y = yrs.sort().reverse()[0];
    }

    return {
      year: y,
      years: yrs,
    };
  };

  const { year, years } = processYears(data);


  return (
    <View><Text>years</Text></View>
  );
};

export default YearChooser;


const styles = StyleSheet.create({

});