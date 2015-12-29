var app = angular.module('musicApp', []);
app.controller('PlaylistController', ['$scope', function($scope) {
  $scope.songs = [
    {id: '201507', name: '红颜旧', artist: 'David Shi', album: 'Piano Covers \'15'},
    {id: '201502', name: 'Secret Base', artist: 'David Shi', album: 'Piano Covers \'15'},
  ];
}]);
