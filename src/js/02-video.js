import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LS_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle((data) => {
    const currentTime = data.seconds;
    localStorage.setItem(LS_KEY, currentTime);
}, 1000));

const savedPlaybackTime = localStorage.getItem(LS_KEY);
if (savedPlaybackTime !== null) {
    player.setCurrentTime(savedPlaybackTime);
}


