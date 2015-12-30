var app = angular.module('musicApp', []);

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['self'])
});

app.controller('PlaylistController', function($scope) {
  $scope.songs = [
    {name: '红颜旧', artist: 'David Shi', album: 'Piano Covers \'15', track: '07'},
    {name: 'See You Again', artist: 'David Shi', album: 'Piano Covers \'15', track: '06'},
    {name: 'The Place Where Wishes Come True', artist: 'David Shi', album: 'Piano Covers \'15', track: '05'},
    {name: '回梦游仙', artist: 'David Shi', album: 'Piano Covers \'15', track: '04'},
    {name: 'Porcelain', artist: 'David Shi', album: 'Piano Covers \'15', track: '03'},
    {name: 'Secret Base', artist: 'David Shi', album: 'Piano Covers \'15', track: '02'},
    {name: 'Sadness and Sorrow', artist: 'David Shi', album: 'Piano Covers \'15', track: '01'},
  ];
  $scope.getSongUrl = function(song) {
    return song.album + '/' + song.track + ' ' + song.name + '.mp3';
  };
  $scope.getAlbumUrl = function(song) {
    return song.album + '/cover.jpg';
  };
});
