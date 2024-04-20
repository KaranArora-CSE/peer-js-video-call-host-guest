import React from 'react';
import peer from 'peerjs';
import './style.css'

function Host() {

    let localStreamRef = React.useRef(null);
    let remoteStreamRef = React.useRef(null);

    let _LocalStream = React.useRef(null);

    let callRef = React.useRef(null);

    let hostPeerRef = React.useRef(null);
    let [hostIdState, setHostIdState] = React.useState('');

    React.useEffect(() => {
        hostPeerRef.current = new peer();
        hostPeerRef.current.on('open', (id) => {
            setHostIdState(id);
            // console.log("🚩", id);
        })
        hostPeerRef.current.on('call', function (call) {
            console.log("someone calling you")
            call.answer(_LocalStream);
            callRef.current = call;
            callRef.current.on('stream', function(stream) {
                console.info(stream);
                remoteStreamRef.current.srcObject = stream;
                remoteStreamRef.current.height = 200;
                remoteStreamRef.current.play();
            });
        });
    }, []);

    React.useEffect(() => {
        async function LoadCamVideo() {
            let camStream = await navigator.mediaDevices.getUserMedia({ video: true });
            localStreamRef.current.srcObject = camStream;

            _LocalStream = camStream;
            localStreamRef.current.play();
            localStreamRef.current.height = 200;

            console.log("🌐",camStream)
        }
        LoadCamVideo();
    }, [])


    return (
        <div>
            <p>Host</p>
            <p>{hostIdState}</p>

            <div>
                <video ref={localStreamRef}></video>
                <video ref={remoteStreamRef}></video>
            </div>
        </div>
    )
}

export default Host