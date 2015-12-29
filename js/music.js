angular.module('musicApp', [])
  .controller('PlaylistController', function() {
    var playlist = this;
    playlist.songs = [
      {name: 'Secret Base', artist: 'David Shi', album: 'Piano Covers \'15'},
      {name: '红颜旧', artist: 'David Shi', album: 'Piano Covers \'15'},
    ];
  });


