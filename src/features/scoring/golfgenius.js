import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  WebView
} from 'react-native';


export class GolfGenius extends React.PureComponent {

  _get_src() {
    let src = "";
    const { type, gg_num } = this.props;

    if( type === 'lb' ) {
      src = "src='https://www.golfgenius.com/pages/" + gg_num
          + "?no_header=no_nav_bar&banner=false' ";
    }

    if( type === 'tt' ) {
      src = "src='https://www.golfgenius.com/leagues/" + gg_num
          + "/widgets/next_round?teesheet_mobile=true' ";
    }

    return src;
  }

  render() {
    let { height, width } = Dimensions.get('window');
    let content;

    const iframe = `
<iframe frameBorder='0'
  mozallowfullscreen='true'
  webkitallowfullscreen='true'
  name='page_iframe'
  scrolling='auto'
  ` + this._get_src() + `
  height='` + height + `'
  width='` + width + `'
  >
</iframe>
`;
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
        scalesPageToFit={false}
      />
    );

    return content;
  }
};

const styles = StyleSheet.create({
  gglb: {
    margin: 0,
    padding: 0
  }
});
