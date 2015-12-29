var app = angular.module('musicApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $log.info($routeParams);
  $routeProvider.when('/:id', {
    templateUrl: 'index.html',
    controller: 'PlaylistController'
  })
}]);
app.controller('PlaylistController', ['$scope', '$routeParams', function($scope, $routeParams) {
  songs = [
    {id: '201507', name: '红颜旧', artist: 'David Shi', album: 'Piano Covers \'15'},
    {id: '201502', name: 'Secret Base', artist: 'David Shi', album: 'Piano Covers \'15'},
  ];
  var id = $routeParams.id;
  var playingIndex = 0;
  for (i = 0; i < songs.len; i++) {
    if (songs[i].id == id) {
      playingIndex = i;
      break;
    }
  }
  $scope.songs = songs;
  $scope.playingIndex = playingIndex;
}]);


