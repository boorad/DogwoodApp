import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {fontFamily, fontSize} from 'common/styles/style';
import {headerColor, primaryColor} from 'common/styles/color';

import DeviceInfo from 'react-native-device-info';
import Header from 'common/header';
import React from 'react';

const AboutScreen = props => {
  var version = DeviceInfo.getVersion();

  const title = (
    <View style={[styles.title]}>
      <Text style={[styles.titleText]}>Dogwood App</Text>
    </View>
  );

  return (
    <View style={[styles.container]}>
      <Header />
      {title}
      <View style={styles.aboutContainer}>
        <ScrollView>
          <View style={styles.rowsContainer}>
            <View style={styles.logoContainer}>
              <View>
                <Image
                  source={require('common/img/dogwood-logo.png')}
                  style={styles.aboutDILogo}
                />
              </View>
              <View>
                <Text style={styles.aboutHosted}>Hosted by:</Text>
                <Image
                  source={require('common/img/dhgc_trans_bg.png')}
                  style={styles.aboutDHGCLogo}
                />
                <Text style={styles.aboutHosted}>Druid Hills Golf Club</Text>
              </View>
            </View>
            <View style={styles.credsContainer}>
              <Text style={styles.aboutVersion}>Version {version}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Image source={require('common/img/eleven.png')} style={styles.aboutBG} />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    flex: 1,
  },
  title: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  titleText: {
    fontSize: fontSize + 4,
    fontFamily: fontFamily,
    color: headerColor,
  },
  aboutContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rowsContainer: {
    flex: 1,
  },
  logoContainer: {
    backgroundColor: '#fff',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  credsContainer: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  aboutDILogo: {
    height: 125,
    width: 125,
    marginRight: 30,
  },
  aboutDHGCLogo: {
    height: 100,
    width: 83,
    marginBottom: 10,
  },
  aboutHosted: {
    marginTop: 5,
    marginBottom: 5,
  },
  aboutVersion: {
    marginVertical: 10,
  },
  aboutBy: {
    marginTop: 5,
    fontSize: fontSize - 2,
    alignSelf: 'center',
  },
  aboutSrc: {
    fontSize: fontSize - 4,
    alignSelf: 'center',
  },
  aboutBG: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
