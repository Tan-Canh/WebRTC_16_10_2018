// const playStream = require('./playStream');
import playStream from './playStream';
import Peer from 'simple-peer';
import $ from 'jquery';


const config = { video: true, audio: false };
const myVideo = document.getElementById('myVideo');
const yourFriendVideo = document.getElementById('yourFriendVideo');

const openStream = () => {
    navigator.mediaDevices.getUserMedia(config)
        .then(stream => {
            playStream(stream, myVideo);

            const peer = new Peer({
                initiator: location.hash === '#your-friend',
                trickle: false,
                stream: stream
            });
            
            peer.on('signal', token => {
                $('#txtYourToken').val(JSON.stringify(token));
            });

            $('#btnYourFriendToken').click(() => {
                const friendSignal = JSON.parse($('#inputYourFriendToken').val());
                peer.signal(friendSignal);
            })

            peer.on('stream', videoFriend => playStream(videoFriend, yourFriendVideo))
            // peer.on('connect', () => console.log('connect'))
            
        }).catch(err => console.log(err))
}

// module.exports = openStream;
export default openStream;