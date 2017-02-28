
const url = 'http://tpp.ghin.com/Club/Scoring/Webservices/StrokeData.asmx/ScoringResultsTeamGroup';

export default class TPP {

  constructor(tourney) {
    this.tourney = tourney;
  }

  getData(cb) {

    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tournamentID: this.tourney,
        scoreMethod: 2,
        players: false,
        teamGroupID: 0,
        numberToInclude: 0,
        flightID: 0,
        scoreMode: 0,
        scorecardID: 0,
        mobileBrowser: false,
        noCache: false
      })
    })
      .then((response) => response.json())
      .then((response) => {
        cb(this._transform(response.d.Results));
      })
      .catch((e) => {
        console.error('TPP getData', e);
      });
  };

  _transform(raw) {
    var d = [];

    for( var i=0; i < raw.length; i++ ) {
      d.push({
        id: raw[i].ID,
        pos: raw[i].Pos,
        name: raw[i].Name,
        today: raw[i].Today,
        thru: raw[i].Hole,
        tot: raw[i].TotalToPar,
        fav: 0,
        r1: raw[i].RoundScore[0] || 0,
        r2: raw[i].RoundScore[1] || 0,
        r3: raw[i].RoundScore[2] || 0,
        r4: raw[i].RoundScore[3] || 0,
        totscore: raw[i].Total,
        cut: raw[i].Cut,
        teetime: raw[i].time,
        hbh: raw[i].HBH[0].Score
      });
    }
    return {'0': d};
  };

};
