var net = require('net');
var socket = net.Socket()
socket.connect(8080, "10.64.120.91", function(conn) {
    console.log('connected!');
    var r = socket.write("Help\n");
    socket.on('data', function(data) {
        console.log('data: ' + data);
    });
    socket.on('error', function(data) {
        console.log('error: ' + data);
    });
});

/*
var Remote = require('vlc-remote');
var remote = new Remote(port = 8080, host = "10.64.120.91");

// remote.play("/video-sync/2.mp4", function(err, body) {
//     if (err) {
//         console.log('ERR: ' + err);
//     } else {
//         console.log('body: ' + body);
//     }
// });

remote.fullscreen();

//remote.pause();

// remote.stop(function(err, body) {

// });
*/