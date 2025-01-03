import React, { useState } from "react";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";

const ConversationTranscriber = () => {
  const [transcription, setTranscription] = useState([]);
  const [error, setError] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const filename = file.name;
    const audioBuffer = await file.arrayBuffer();

    const pushStream = sdk.AudioInputStream.createPushStream();
    const speechKey = "1PSyBp5yPyEIbWIGWTjd1XzVKb3tFqee55XvHaPs22BIIo8hIoqTJQQJ99BAACYeBjFXJ3w3AAAYACOG2Xav";
    const speechRegion =  'eastus' ;

    if (!speechKey || !speechRegion) {
      setError("Speech Key or Region is not set in environment variables.");
      return;
    }

    const speechConfig = sdk.SpeechConfig.fromSubscription(speechKey, speechRegion);
    const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
    const conversationTranscriber = new sdk.ConversationTranscriber(speechConfig, audioConfig);

    const reader = new FileReader();
    reader.onload = () => {
      const buffer = new Uint8Array(reader.result);
      pushStream.write(buffer);
      pushStream.close();
    };
    reader.readAsArrayBuffer(file);

    conversationTranscriber.sessionStarted = (s, e) => {
      console.log("SessionStarted event");
      console.log("SessionId:" + e.sessionId);
    };

    conversationTranscriber.sessionStopped = (s, e) => {
      console.log("SessionStopped event");
      console.log("SessionId:" + e.sessionId);
      conversationTranscriber.stopTranscribingAsync();
    };

    conversationTranscriber.canceled = (s, e) => {
      console.log("Canceled event");
      console.log(e.errorDetails);
      setError(e.errorDetails);
      conversationTranscriber.stopTranscribingAsync();
    };

    conversationTranscriber.transcribed = (s, e) => {
      console.log("TRANSCRIBED: Text=" + e.result.text + " Speaker ID=" + e.result.speakerId);
      setTranscription((prev) => [...prev, { text: e.result.text, speakerId: e.result.speakerId }]);
    };

    conversationTranscriber.startTranscribingAsync(
      () => {
        console.log("Transcription started.");
      },
      (err) => {
        console.error("Error starting transcription: " + err);
        setError("Error starting transcription: " + err);
      }
    );
  };

  return (
    <div className="conversation-transcriber">
      <h1>Conversation Transcriber</h1>
      <input type="file" accept="audio/wav" onChange={handleFileUpload} />
      {transcription.length > 0 && (
        <div>
          <h2>Transcription</h2>
          <ul>
            {transcription.map((item, index) => (
              <li key={index}>
                Speaker {item.speakerId}: {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
          <p style={{ color: "red" }}>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ConversationTranscriber;
