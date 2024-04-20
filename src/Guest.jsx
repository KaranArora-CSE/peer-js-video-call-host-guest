import React from 'react';
import peer from 'peerjs';
import './style.css'

function Guest() {

    let localStreamRef = React.useRef(null);
    let remoteStreamRef = React.useRef(null);

    let _LocalStream = React.useRef(null);

    let callRef = React.useRef(null);

    let guestPeerRef = React.useRef(null);
    let [guestIdState, setGuestIdState] = React.useState('');

    React.useEffect(() => {
        guestPeerRef.current = new peer();
        guestPeerRef.current.on('open', (id) => {
            setGuestIdState(id);
            // console.log("🚩", id);
        })
    }, []);

    React.useEffect(() => {
        async function LoadCamVideo(){
            let camStream = await navigator.mediaDevices.getUserMedia({video: true});
            localStreamRef.current.srcObject = camStream;

            _LocalStream.current = camStream;
            localStreamRef.current.play();
            localStreamRef.current.height = 200;
            
            console.log("🌐",camStream)
        }
        LoadCamVideo();
    },[])


    let [targetPeerId, setTargetPeerId] = React.useState('');
    function handleTargetId(e) { setTargetPeerId(e.target.value) }
    function handleConnection(){
        console.log("handelling");
        console.log( _LocalStream.current);
        console.log(guestPeerRef.current);
        callRef.current = guestPeerRef.current.call(targetPeerId, _LocalStream.current);
        callRef.current.on('stream', function(stream) {
            console.info(stream);
            remoteStreamRef.current.srcObject = stream;
            remoteStreamRef.current.height = 200;
            remoteStreamRef.current.play();
        });
    }
    return (
        <div>
            <p>Guest</p>
            <p>{guestIdState}</p>
            <div>
                <input type="text" value={targetPeerId} onChange={handleTargetId} />
                <button onClick={handleConnection}>Connect</button>
            </div>
            <br />
            <div>
                <video ref={localStreamRef}></video>
                <video ref={remoteStreamRef}></video>
            </div>
        </div>
    )
}

export default Guest;