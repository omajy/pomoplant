import {useState, useEffect} from 'react';

export default function StudyTimer(){

    const [secondsElapsed, setSecondsElapsed] = useState(1);

    useEffect(() => {
        const currentStudyTime = setInterval(() => {
            setSecondsElapsed(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(currentStudyTime);
    }, []);

    function formatTime(totalSeconds) {
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      }

        return(
            <div className="bg-white text-green-800 rounded-lp p-4 shadow">
                {formatTime(secondsElapsed)}
            </div>
        );
}

