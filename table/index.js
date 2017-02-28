/**
 * React Native Table Component
 * https://github.com/ ...
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const mapValues = (obj, callback) => {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    newObj[key] = callback(obj[key]);
  });

  return newObj;
};


export default class Table extends Component {

  static propTypes = {
    data: React.PropTypes.any.isRequired,
    renderRow: React.PropTypes.func.isRequired,
    renderPlaceholder: React.PropTypes.func,
    refreshControl: React.PropTypes.func,
    renderHeader: React.PropTypes.func,
    sections: React.PropTypes.bool,
    renderSectionHeader: React.PropTypes.func,
    renderFooter: React.PropTypes.func,
    onEndReached: React.PropTypes.func,
    rowHasChanged: React.PropTypes.func,
  };

  static defaultProps = {
    onEndReached() {},
    rowHasChanged(r1, r2) {
      return r1 !== r2;
    },
    renderHeader: null,
    sections: false,
    renderSectionHeader: null,
    renderFooter: null,
    refreshControl: null,
    renderPlaceholder: null
  };

  constructor(props: Object) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.some((e, i) => props.rowHasChanged(e, r2[i])),
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    if (props.sections === true) {
      this.state = {
        dataSource: ds.cloneWithRowsAndSections(
          this._prepareSectionedData(this.props.data)
        )
      };
    } else {
      this.state = {
        dataSource: ds.cloneWithRows(
          this.props.data
        )
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sections === true) {
      this.state = {
        dataSource: this.state.dataSource
                        .cloneWithRowsAndSections(nextProps.data)
      };
    } else {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
      });
    }
  }

  _prepareSectionedData = data => {
    const preparedData = mapValues(data, (vals) => vals);
    return preparedData;
  };

  _renderPlaceholder = i =>
    <View key={i} style={{ width: width }} />;

  _renderRow = rowData =>
    <View style={styles.row}>
      { this.props.renderRow(rowData) }
    </View>;

  render() {
    return (
      <View style={styles.container}>
        <ListView
          {...this.props}
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          enableEmptySections
          onEndReached={this.props.onEndReached}
          onEndReachedThreshold={height}
          refreshControl={this.props.refreshControl}
          renderHeader={this.props.renderHeader}
          renderSectionHeader={this.props.renderSectionHeader}
          renderFooter={this.props.renderFooter}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  },
  row: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex: 1
  }
});
