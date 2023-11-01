  import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
  import useClipboard from "react-use-clipboard";
  import { useState } from "react"
  
  function buttonToggle() {
    var y = document.getElementById("start-btn");
    var x = document.getElementById("stop-btn");
    if (y.style.display === "none") {
      y.style.display = "grid";
      x.style.display = "none";
      SpeechRecognition.stopListening();
    } else {
      y.style.display = "none";
      x.style.display = "grid";
      x.classList.add("blink-btn");
      SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    }
  }

  
  const Assist = () => {
    const [textToCopy, setTextToCopy] = useState();
    // const [isCopied, setCopied] = useClipboard(textToCopy, {
    //   successDuration: 1000,
    // });

      // window.onload = () => {
      //   SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
      // }
  
    // const startListening = () => ;
    const { transcript, browserSupportsSpeechRecognition } =
      useSpeechRecognition();
  
    if (!browserSupportsSpeechRecognition) {
      return null;
    }
  
    return (
      <div className="container">
        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript.toLowerCase().includes("go to dashboard") ? (
            (window.location.href = "/lms-dashboard")
          ) : transcript.toLowerCase().includes("go to voice check") ? (
            (window.location.href = "/voice-check")
          ) : transcript.toLowerCase().includes("go to camera check") ? (
            (window.location.href = "/camera-check")
          ) : transcript.toLowerCase().includes("attempt quiz") ? (
            (window.location.href = "/answer-q")
          ) : (
            <p></p>
          )}
  
          {/* {transcript} */}
        </div>
  
        <div className="btn-style btn btn-rounded">
          <button
            className="assist-start-btn "
            onClick={buttonToggle}
            id="start-btn"
          >
            Start Listening
          </button>
          <button
            className="assist-stop-btn"
            onClick={buttonToggle}
            id="stop-btn"
            style={{ display: "none" }}
          >
            Stop Listening
          </button>
        </div>
      </div>
    );
  };
  
  export default Assist;
  