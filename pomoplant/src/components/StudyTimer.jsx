import {useState, useEffect} from 'react';

export default function StudyTimer({ secondsElapsed }) {
    function formatTime(totalSeconds) {
      totalSeconds = Number(totalSeconds) || 0;
      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
      const seconds = String(totalSeconds % 60).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }
  
    return (
      <div className="bg-white text-green-800 px-4 py-2 rounded shadow font-mono w-32 text-center">
        {formatTime(secondsElapsed)}
      </div>
    );
  }
  