import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const time = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(time).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('timeupdate',  throttle((e) => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(e.seconds));
}, 1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

// function targetTimeOnPlay() {
//     localStorage.setItem("videoplayer-current-time", JSON.stringify(e.seconds));
//     console.log(e);
// }