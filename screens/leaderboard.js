import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Orientation from '@drivetribe/react-native-orientation';
import Grid from 'react-native-grid-component';

import { styles } from '../styles/style';


export class LeaderboardScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Leaderboard'
    })
  };

  constructor(props) {
    super(props);
    this.state = {
      year: '2017',
      orientation: 'UNKNOWN',
      data: [
        {pos: '1', name: "Willett", today: '-5', thru: 'F', tot: '-5', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 283},
        {pos: 'T2', name: "Westwood", today: '-3', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T4', name: "Casey", today: '-5', thru: 'F', tot: '-1', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 287},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
        {pos: 'T2', name: "Spieth", today: '+1', thru: 'F', tot: '-2', fav: 0,
         r1: 70, r2: 74, r3: 72, r4: 67, totscore: 286},
      ]
    };

    this._updateOrientation = this._updateOrientation.bind(this);
    this._renderScoreRow = this._renderScoreRow.bind(this);
  }

  _updateOrientation(or) {
    this.setState({orientation: or});
    this.render();
  }

  _renderLBHeader() {

  };

  _renderScoreRow(data, i) {
    return (
      <View style={[styles.lbRow, {flex: 6}]}>
        <Text style={[styles.lbCell]}>{data.pos}</Text>
        <Text style={[styles.lbCellName]}>{data.name}</Text>
        <Text style={[styles.lbCell]}>{data.today}</Text>
        <Text style={[styles.lbCell]}>{data.thru}</Text>
        <Text style={[styles.lbCell]}>{data.tot}</Text>
        { this.state.orientation != 'PORTRAIT' &&
          <View style={[styles.lbExpanded, {flex: 5}]}>
            <Text style={[styles.lbCell]}>{data.r1}</Text>
            <Text style={[styles.lbCell]}>{data.r2}</Text>
            <Text style={[styles.lbCell]}>{data.r3}</Text>
            <Text style={[styles.lbCell]}>{data.r4}</Text>
            <Text style={[styles.lbCell,styles.lbCellTot]}>{data.totscore}</Text>
          </View>
        }
        <Text style={[styles.lbCell]}>{data.fav}</Text>
      </View>
    );
  }

  componentWillMount() {
    this.setState({orientation: Orientation.getInitialOrientation()});
  }

  componentDidMount() {
    Orientation.addOrientationListener(this._updateOrientation);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._updateOrientation);
  }

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    var width = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="menu"
            size={24}
            color="#fff"
            onPress={() => navigate('DrawerOpen')} />
          <Image
            source={require('../img/dogwood-logo.png')}
            style={styles.headerLogo}
          />
          <Text style={[styles.headerText, styles.lbSelect]}>Round 4</Text>
        </View>
        <ScrollView>
          {this.state.orientation == 'PORTRAIT' &&
           <Image
             source={require('../img/twelve.png')}
             style={{height: 175, width: width}}
             resizeMode='cover'
           />
          }
        <Grid
          style={styles.lbGrid}
          data={this.state.data}
          itemsPerRow={1}
          renderItem={this._renderScoreRow}
        />
        </ScrollView>
      </View>
    );
  }
};
