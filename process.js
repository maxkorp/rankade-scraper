var fse = require('fs-extra');
var path = require('path');
var cheerioMatch = require('./cheerioMatch');
var curlMatch = require('./curlMatch');
var curlAllMatches = require('./curlAllMatches');

if (~process.argv.indexOf('-f')) {
  fse.removeSync('./theMatchInfo');
  fse.removeSync('./matches');
  fse.mkdirSync('./matches');
}
var matches = curlAllMatches()
  .map(function(match) {
    console.log('curling ' + match);
    var info;
    try {
      info = fse.readJsonSync('./matches/' + match);
    } catch(e) {
      var text = curlMatch(match);
      info = cheerioMatch(text);
    }

    info.tournament = !!info.tournament;
    fse.writeJsonSync('./matches/' + match, info);
    return info;
  })

fse.writeJsonSync('./theMatchInfo', matches);
