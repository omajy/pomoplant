import StudyTimer from './StudyTimer';
import SproutsDisplay from './SproutsDisplay';

export default function HUDOverlay({ secondsElapsed, sprouts }) {
  return (
    <div className="fixed top-4 left-4 flex flex-col space-y-2 z-50">
      <StudyTimer secondsElapsed={secondsElapsed} />
      <SproutsDisplay sprouts={sprouts} />
    </div>
  );
}