import Peer from 'simple-peer';
import $ from 'jquery';

const peer = new Peer({
    initiator: location.hash === '#your-friend',
    trickle: false
});

export const offer = peer.on('signal', token => {
    console.log(token);
})


