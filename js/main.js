var app = angular.module('musicApp', []);

app.controller('PlaylistController', function($scope) {
  var albums = ['Piano Covers \'15', 'Piano Covers \'16'];
  var songs = [
    {name: '一番の宝物', desc: 'Angel Beats!', album: albums[1], track: '01'},
    {name: '红颜旧', desc: '琅琊榜', album: albums[0], track: '07'},
    {name: 'See You Again', desc: 'Furious 7', album: albums[0], track: '06'},
    {name: 'The Place Where Wishes Come True', desc: 'Clannad', album: albums[0], track: '05'},
    {name: '回梦游仙', desc: '仙剑奇侠传四', album: albums[0], track: '04'},
    {name: 'Porcelain', desc: 'Helen Jane Long', album: albums[0], track: '03'},
    {name: 'Secret Base', desc: 'Anohana', album: albums[0], track: '02'},
    {name: 'Sadness and Sorrow', desc: 'Naruto', album: albums[0], track: '01'},
  ];
  for (var i = 0; i < songs.length; i++) {
    var song = songs[i];
    songs[i].artist = 'David Shi';
    songs[i].url = song.album + '/' + song.track + ' ' + song.name + '.mp3';
    songs[i].cover = song.album + '/cover.jpg';
  }
  $scope.songs = songs;
});
