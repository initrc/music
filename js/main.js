var app = angular.module('musicApp', []);

app.controller('PlaylistController', function($scope) {
  $scope.songs = [
    {name: '红颜旧', desc: '琅琊榜', album: 'Piano Covers \'15', track: '07'},
    {name: 'See You Again', desc: 'Furious 7', album: 'Piano Covers \'15', track: '06'},
    {name: 'The Place Where Wishes Come True', desc: 'Clannad', album: 'Piano Covers \'15', track: '05'},
    {name: '回梦游仙', desc: '仙剑奇侠传四', album: 'Piano Covers \'15', track: '04'},
    {name: 'Porcelain', desc: 'Helen Jane Long', album: 'Piano Covers \'15', track: '03'},
    {name: 'Secret Base', desc: 'Anohana', album: 'Piano Covers \'15', track: '02'},
    {name: 'Sadness and Sorrow', desc: 'Naruto', album: 'Piano Covers \'15', track: '01'},
  ];
  for (var i = 0; i < $scope.songs.length; i++) {
    var song = $scope.songs[i];
    $scope.songs[i].artist = 'David Shi';
    $scope.songs[i].url = song.album + '/' + song.track + ' ' + song.name + '.mp3';
    $scope.songs[i].cover = song.album + '/cover.jpg';
  }
});
