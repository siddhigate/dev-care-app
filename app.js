var micid =""

function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      // window.localStream = stream; // A
      // window.localAudio.srcObject = stream; // B
      // window.localAudio.autoplay = true; // C
      console.log(stream);
      // get device id of selected microphone
      console.log(stream.getAudioTracks()[0].getSettings());

      micid = stream.getAudioTracks()[0].getSettings().deviceId;
      console.log("plugged in");


      navigator.mediaDevices.enumerateDevices().then((devices) => {
        // console.log("first devices");
        // console.log(devices);

        //   recorder = new MediaRecorder(stream);
        //   recorder.stream.getAudioTracks().forEach(function(track) {
        //     track.enabled = false;
        // });
      });
    })
    .catch((err) => {
      console.log("u got an error:" + err);
    });
}

getLocalStream();

navigator.mediaDevices.addEventListener("devicechange", () => {
  console.log("here12");

  // whenever device is plugged in or plugged out
  navigator.mediaDevices.enumerateDevices().then((devices) => {
    console.log("change");
    console.log(devices);

    var pluggedout = true;
    for(let i = 0; i < devices.length; i++) {
      if(devices[i].deviceId == micid){
        pluggedout = false;
      }
    }
    if(pluggedout) {
      console.log("plugged out")
    }

  });
});

// console.log("here")

// navigator.mediaDevices.enumerateDevices().then((devices) => {
//     console.log("first devices")
//     console.log(devices);
//   });
