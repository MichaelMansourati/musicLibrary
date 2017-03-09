var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
    for (var pxx in library.playlists) {
      var libPlay = library.playlists;
      console.log(pxx + ": " + libPlay[pxx].name + " - " + libPlay[pxx].tracks.length + " tracks");
    }
  },
  printTracks: function () {
    for (var txx in library.tracks) {
      var libTracks = library.tracks;
      console.log(txx + ": " + libTracks[txx].name + " by " + libTracks[txx].artist + " (" + libTracks[txx].album + ")");
    }
  },
  printPlaylist: function (playlistId) {
    var chosenPl = library.playlists[playlistId];
    console.log(chosenPl.id + ": " + chosenPl.name + " - " + chosenPl.tracks.length + " tracks");
    for (i = 0; i < chosenPl.tracks.length; i++) {
      var trackNum = chosenPl.tracks[i];
      var trackFinder = library.tracks[trackNum];
      console.log(chosenPl.tracks[i] + ": " + trackFinder.name + " (" + trackFinder.album + ")");
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    var hungryPlaylist = library.playlists[playlistId].tracks;
    (hungryPlaylist.push(library.tracks[trackId].id));
  },
  addTrack: function (name, artist, album) {

    var newId = uid()        //~~Ask why newId gives back string surrounded by quotes when logged when others are not
    library.tracks[newId] = {
      'id': newId,
      'name': name,
      'artist': artist,
      'album': album
    }
  },
  addPlaylist: function (name) {

    var newId = uid();         //~~Ask why newId gives back string surrounded by quotes when logged when others are not
    library.playlists[newId] = {
      'id': newId,
      'name': name,
    }
  }
}

