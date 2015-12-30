var app = angular.module('musicApp', []);

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['self'])
});

app.controller('PlaylistController', function($scope) {
  $scope.songs = [
    {name: '红颜旧', artist: 'David Shi', album: 'Piano Covers \'15'},
    {name: '红颜旧', artist: 'David Shi', album: 'Piano Covers \'15'},
  ];
  $scope.getSongUrl = function(song) {
    return song.name + '.mp3';
  };
  $scope.getAlbumUrl = function(song) {
    return 'image/' + song.album + '.jpg';
  };
});
