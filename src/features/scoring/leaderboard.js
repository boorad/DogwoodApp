import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TPP from '../data/tpp.js';

import Table from '../table/index.js'; // TODO: make its own component
import { styles } from '../styles/style';


export class LeaderboardScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Leaderboard',
      icon: ({tintColor}) => (
        <Icon
          name="monitor"
          size={20}
          color={tintColor}
        />
      )
    })
  };

  constructor(props) {
    super(props);
    this.state = {
      year: '2017',
      tpp_tourney: '124850',
      data: []
    };

    this._renderTableRow = this._renderTableRow.bind(this);
    this._renderTableHeader = this._renderTableHeader.bind(this);
    this._fetchData = this._fetchData.bind(this);
    this._updateData = this._updateData.bind(this);
  }

  _fetchData() {
    //    var tpp = new TPP(this.state.tpp_tourney);
    //    tpp.getData(this._updateData);

    // for DEV, just load this file:
    var d = require('../data/dogwood_2016.json');
    this._updateData({'section1': d});
  }

  _updateData(data) {
    this.setState({ data: data });
  }

  _renderTableHeader() {
    return (
      <View style={[styles.lbRow, {flex: 6}]}>
        <Text style={[styles.lbCell,styles.lbHead]}>POS</Text>
        <Text style={[styles.lbCellName,styles.lbHead, styles.lbHeadName]}>PLAYER</Text>
        <Text style={[styles.lbCell,styles.lbHead]}>TODAY</Text>
        <Text style={[styles.lbCell,styles.lbHead]}>THRU</Text>
        <Text style={[styles.lbCell,styles.lbHead]}>TOTAL</Text>
/*
        { this.state.orientation != 'PORTRAIT' &&
          <View style={[styles.lbExpanded, {flex: 5}]}>
            <Text style={[styles.lbCell,styles.lbHead]}>R1</Text>
            <Text style={[styles.lbCell,styles.lbHead]}>R2</Text>
            <Text style={[styles.lbCell,styles.lbHead]}>R3</Text>
            <Text style={[styles.lbCell,styles.lbHead]}>R4</Text>
            <Text style={[styles.lbCell,styles.lbCellTot,styles.lbHead]}>TOTAL</Text>
          </View>
        }
*/
        <Text style={[styles.lbCell,styles.lbHead]}>FAV</Text>
      </View>
    );
  };

  _renderTableRow(data) {
    return (
      <View style={[styles.lbRow, {flex: 6}]}>
        <Text style={[styles.lbCell,styles.lbData]}>{data.pos}</Text>
        <Text style={[styles.lbData,styles.lbCellName]}>{data.name}</Text>
        <Text style={[styles.lbCell,styles.lbData]}>{data.today}</Text>
        <Text style={[styles.lbCell,styles.lbData]}>{data.thru}</Text>
        <Text style={[styles.lbCell,styles.lbData]}>{data.tot}</Text>
/*
        { this.state.orientation != 'PORTRAIT' &&
          <View style={[styles.lbExpanded, {flex: 5}]}>
            <Text style={[styles.lbCell,styles.lbData]}>{data.r1}</Text>
            <Text style={[styles.lbCell,styles.lbData]}>{data.r2}</Text>
            <Text style={[styles.lbCell,styles.lbData]}>{data.r3}</Text>
            <Text style={[styles.lbCell,styles.lbData]}>{data.r4}</Text>
            <Text style={[styles.lbCell,styles.lbCellTot,styles.lbData]}>{data.totscore}</Text>
          </View>
        }
*/
        <TouchableOpacity
          style={[styles.lbCell]}
          key={data.id}>
          <Text style={[styles.lbData]}>{data.fav}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentWillMount() {
    this._fetchData();
  }

  render() {
    const { navigate }= this.props.navigation;
    const { params } = this.props.navigation.state;
    var headerIndex = 1; //this.state.orientation == 'PORTRAIT' ? 1 : 0;

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
        <ScrollView
          stickyHeaderIndices={[headerIndex]}>
/*
          {this.state.orientation == 'PORTRAIT' &&
           <Image
             source={require('../img/twelve.png')}
             style={{height: 175, width: '100%'}}
             resizeMode='cover'
           />
          }
*/
          {this._renderTableHeader()}
          <Table
            style={styles.lbTable}
            data={this.state.data}
            sections={true}
            renderRow={this._renderTableRow}
          />
        </ScrollView>
      </View>
    );
  }
};
