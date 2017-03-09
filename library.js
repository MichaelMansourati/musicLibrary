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
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks



var printPlaylists = function () {
  for (var pxx in library.playlists) {
    var libPlay = library.playlists;
    console.log(pxx + ": " + libPlay[pxx].name + " - " + libPlay[pxx].tracks.length + " tracks");
  }

}



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)



var printTracks = function () {
  for (var txx in library.tracks) {
    var libTracks = library.tracks;
    console.log(txx + ": " + libTracks[txx].name + " by " + libTracks[txx].artist + " (" + libTracks[txx].album + ")");
  }

}

printTracks ();



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)



var printPlaylist = function (playlistId) {
  var chosenPl = library.playlists[playlistId];
  console.log(chosenPl.id + ": " + chosenPl.name + " - " + chosenPl.tracks.length + " tracks");
  for (i = 0; i < chosenPl.tracks.length; i++) {
    var trackNum = chosenPl.tracks[i];
    var trackFinder = library.tracks[trackNum];
      console.log(chosenPl.tracks[i] + ": " + trackFinder.name + " (" + trackFinder.album + ")");
  }
}

printPlaylist ('p01');


// adds an existing track to an existing playlist




var addTrackToPlaylist = function (trackId, playlistId) {
  var hungryPlaylist = library.playlists[playlistId].tracks;
  (hungryPlaylist.push(library.tracks[trackId].id));
}

addTrackToPlaylist ('t03', 'p01');
console.log(library.playlists.p01.tracks);



// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library



var addTrack = function (name, artist, album) {
  var newId = uid()        //~~Ask why newId gives back string surrounded by quotes when logged when others are not
  library.tracks[newId] = {
    'id': newId,
    'name': name,
    'artist': artist,
    'album': album
  }
  console.log(library.tracks);
}

addTrack ('this is the name', 'this is the artist', 'this is the album');



// adds a playlist to the library



var addPlaylist = function (name) {
  var newId = uid();         //~~Ask why newId gives back string surrounded by quotes when logged when others are not
  library.playlists[newId] = {
    id: newId,
    'name': name,
  }
  console.log(library.playlists);
}

addPlaylist ('kidzBop9')


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}