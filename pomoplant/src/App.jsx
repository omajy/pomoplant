import { useState } from 'react';
import StudyTimer from './components/StudyTimer';

export default function App() {
  const [inSession, setInSession] = useState(false);

  return (
    <>
      {!inSession ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-center px-4">
          <h1 className="text-6xl font-bold text-green-800 mb-6">pomoplant 🌱</h1>
          <p className="text-xl text-green-800 mb-12 max-w-md mx-auto italic">
            a peaceful way to study and grow
          </p>
          <button
            onClick={() => setInSession(true)}
            className="px-8 py-4 bg-green-800 text-white rounded-lg shadow hover:bg-green-800 transition text-2xl"
          >
            begin shift
          </button>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-start bg-green-50 p-8">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">currently working</h2>
          <StudyTimer />
        </div>
      )}
    </>
  );
}
