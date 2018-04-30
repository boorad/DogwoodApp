import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  fontFamily,
  fontSize
} from 'common/styles/style';


export class Story extends React.Component {

  render() {
    let title, content;

    title = (
      <View style={[styles.title]}>
        <Text style={[styles.titleText]}>
          Dogwood History
        </Text>
      </View>
    );

    content = (
      <ScrollView style={styles.story_view}>
        <Text style={styles.story_text}>The first Dogwood Invitational, held in April 1941, validated Druid Hills Golf Club as a challenging venue for amateur golf tournaments. Opened to great acclaim in 1912, the Druid Hills Golf Club has always nurtured talented golfers with a rich history of hosting southern championships. The Club has hosted eight Georgia State Amateur Championships and can boast having held 90 championships including the Dogwood, since the club's establishment.</Text>

        <Text style={styles.story_text}>The golf course at Druid Hills was designed by Englishman H.H. Barker, winner of the Irish Open in 1906. Renowned for its natural beauty and historic significance, the course was extensively renovated in 2003 by famed golf course architect Bob Cupp, whose charter was to return the property to its original Golden Era design--featuring narrow fairways and few artificial traps allowing players to experience the gracious green spaces of the Druid Hills course through a centennial of history, friendship and family.</Text>

        <Text style={styles.story_text}>More than a golf tournament, The Dogwood Invitational partners with sponsors in an effort to raise funds and awareness to help junior golf succeed. The Georgia Junior Golf Association and the Druid Hills Golf Club Foundation are beneficiaries of the tournament. In support of these deserving charities, the Dogwood helps Georgia Junior Golf to expand its programs throughout the metropolitan Atlanta area and continue teaching kids the game. The Druid Hills Golf Club Foundation, which administers the Reynolds Scholarship helps qualified junior golfers with their college tuition. Established in 1996, the Reynolds Scholarship awards deserving students a $12,000, 4-year college scholarship.</Text>

        <Text style={styles.story_text}>The future of professional golf can be seen on the Druid Hills links during the Dogwood. Past Champions include:  Webb Simpson, Hudson Swafford, Brian Harman, Ben Kohles and Lloyd Jefferson Go. Other former players include:Dustin Johnson, Justin Thomas, Matt Kuchar, Brooks Koepka, Patton Kizzire, and Ollie Schniderjans to name a few.</Text>

        <Text style={styles.story_text}>In the past decade the golf course at Druid Hills has enjoyed many refinements and enhancements, providing an ever more challenging site for the Dogwood Invitational. The Dogwood is ranked as having one of the best fields among amateur tournaments in the world. In hosting the Dogwood Invitational, Druid Hills' members extend their support for amateur golf by opening their homes and refrigerators to approximately 90 players during the week of preparation and the tournament. As a result of all these volunteer efforts, The Dogwood consistently ranks as having one of the best amateur tournament fields in the world and Druid Hills Golf Club is proud to continue the tradition of championship golf on our storied links.</Text>

        <Text style={styles.story_text}>Recognized as an elite event in the world out of over 600 tracked by Scratch Players World Amateur Golf Rankings, the Dogwood seeks to perpetuate the tradition of competition, celebrate the game of golf and encourage participation among amateur golfers, volunteers, club membership and sponsors.</Text>
      </ScrollView>
    );

    return (
      <View style={styles.container}>
        {title}
        {content}
      </View>
    );
  }

};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  titleText: {
    fontSize: fontSize+4,
    fontFamily: fontFamily,
    color: 'white'
  },
  story_view: {
    padding: 15,
    backgroundColor: '#fff',
    flex: 1
  },
  story_text: {
    fontFamily: fontFamily,
    fontSize: fontSize,
    paddingBottom: 15
  }
});
