import React from 'react';
import {
  Dimensions,
  Text,
  WebView
} from 'react-native';

import { styles } from '../styles/style';


export class GolfGenius extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      type: props.type,
      gg_num: props.gg_num
    };
  }

  _get_src() {
    var src = "";
    const { type, gg_num } = this.state;

    if( type === 'leaderboard' ) {
      src = "src='https://www.golfgenius.com/pages/" + gg_num
          + "?no_header=no_nav_bar&banner=false' ";
    }

    if( type === 'teetime' ) {
      src = "src='https://www.golfgenius.com/leagues/" + gg_num
          + "/widgets/next_round?teesheet_mobile=true' ";
    }

    return src;
  }

  render() {
    var { height, width } = Dimensions.get('window');
    height = height - 20;

    var content;

    var iframe = "<iframe frameBorder='0' "
               + "mozallowfullscreen "
               + "name='page_iframe' "
               + "scrolling='auto' "
               + this._get_src()
               + "webkitallowfullscreen='true' "
               + "height='" + height + "' "
               + "width='" + width + "' "
               + ">"
               + "</iframe>";
    const html = `
<!DOCTYPE html>\n
<html>
  <head>
    <style type="text/css">
      body { margin: 0; padding: 0; }
    </style>
  </head>
  <body>
` + iframe + `
  </body>
</html>
`;
    content = (
      <WebView
        source={{html: html}}
        style={styles.gglb}
//        attempt to get ios to zoom, but this makes entire page show up small
//        scalesPageToFit={true}
      />
    );

    return content;
  }
};
