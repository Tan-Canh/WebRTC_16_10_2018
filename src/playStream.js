
const playStream = (stream, tagVideoID) => {
    tagVideoID.srcObject = stream;
    tagVideoID.play();

    // console.log('hello')
}

export default playStream;