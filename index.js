var Remote = require('vlc-remote');
var remote = new Remote(port = 45500, host = "127.0.0.1");

remote.play("V:\\video-sync\\2.mp4", function(err, body) {
    if (err) {
        console.log(err);
    }
    console.log(body);
});


// remote.stop(function(err, body) {

// });