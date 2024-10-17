import React, { useEffect, useState } from "react";
import Welcome from "../Component/Beranda/Welcome";
import Navbar from "../Component/Navbar";
import Deskripsi from "../Component/Beranda/Deskripsi";
import Footer from "../Component/Footer";
import backsound from '../assets/backsound3.mp3'; // Import the backsound file


function Beranda() {
  const [isPlaying, setIsPlaying] = useState(false); // State initial is false, meaning music is paused at first

  useEffect(() => {
    // Ensure audio is paused initially
    const audio = document.getElementById('background-audio');
    audio.pause();
  }, []);

  // Function to toggle play/pause
  const toggleMusic = () => {
    const audio = document.getElementById('background-audio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying); // Toggle the state
  };

  return (
    <div className="bg-[#0F172A] blur(10%) min-h-screen">
      <div className="text-slate-200">
        <Navbar />
        <Welcome />
        <Deskripsi />
        <Footer />
      </div>

      {/* Audio element for background sound */}
      <audio id="background-audio" loop>
        <source src={backsound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Play/Pause Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 bg-transparent text-white px-3 py-1 rounded-full shadow-lg hover:bg-white hover:text-indigo-600 transition"
        style={{
          zIndex: 9999,
          border: '2px solid white', 
        }}
      >
        {isPlaying ? (
          <i className="fas fa-pause fa-2x"></i> 
        ) : (
          <i className="fas fa-play fa-2x"></i>
        )}
      </button>
    </div>
  );
}

export default Beranda;
