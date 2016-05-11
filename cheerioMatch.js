var cheerio = require('cheerio');

module.exports = function (html) {
  $ = cheerio.load(html);
  var notes = $('.matchNotes p').text();
  var matchInfo = $('.matchResults').find('.row.matchResult');
  var winnerInfo = $('.matchResults').find('.row.matchResult').first();
  var loserInfo = $('.matchResults').find('.row.matchResult').last();

  var winner = winnerInfo.find('.matchResultRowPlayer').text().trim().replace('*', '');
  var loser = loserInfo.find('.matchResultRowPlayer').text().trim();
  var winnerScore = parseInt(winnerInfo.find('.matchResultPoints').text().trim());
  var loserScore = parseInt(loserInfo.find('.matchResultPoints').text().trim());

  var date = $('[title="Match date"]').text().trim();
  var time = $('[title="Match time"]').text().trim();

  return {
    date: new Date(date + ' ' + time),
    winner: winner,
    winnerScore: winnerScore,
    loser: loser,
    loserScore: loserScore,
    notes: notes.replace('TOURNAMENT MATCH', '').trim(),
    tournament: ~notes.indexOf('TOURNAMENT MATCH')
  };
}
