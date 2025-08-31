// File: src/components/MusicPlayer.jsx
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { FaPlay, FaPause } from "react-icons/fa";
import musicAnimation from "../assets/music.json";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Update the audio source path to be relative to the public directory root
  const [audio] = useState(() => new Audio("/music/1.mp3"));
  const lottieRef = React.useRef();

  useEffect(() => {
    audio.load();

    const initAudio = () => {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        const audioContext = new AudioContext();
        audioContext.resume();
      }
    };

    document.addEventListener("click", initAudio, { once: true });
    document.addEventListener("touchstart", initAudio, { once: true });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const togglePlay = async () => {
    try {
      if (isPlaying) {
        audio.pause();
        lottieRef.current?.pause();
      } else {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
          lottieRef.current?.play();
        }
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Audio playback error:", error);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="relative w-24 h-24">
        {/* Lottie Animation */}
        <Lottie
          lottieRef={lottieRef}
          animationData={musicAnimation}
          loop
          autoplay={false}
          style={{ width: "100%", height: "100%" }}
        />

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="bg-white rounded-full p-4 shadow-lg transition-all
                         hover:bg-gray-50 active:scale-95"
          >
            {isPlaying ? (
              <FaPause className="text-gray-800 text-xl" />
            ) : (
              <FaPlay className="text-gray-800 text-xl ml-0.5" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
