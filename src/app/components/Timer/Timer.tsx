import { useEffect, useState } from 'react';
import Button from '../Button/Button';

export default function Timer(): JSX.Element {
  const [[hours, minutes, seconds], setTimer] = useState([0, 0, 0]);

  const [timerState, setTimerState] = useState<
    'running' | 'paused' | 'stopped'
  >('stopped');

  function countUp() {
    if (timerState !== 'running') {
      return;
    }
    if (seconds === 60) {
      setTimer(([prevHours, prevMinutes]) => [prevHours, prevMinutes + 1, 0]);
    }
    if (minutes === 60) {
      setTimer(([prevHours]) => [prevHours + 1, 0, 0]);
    }
    setTimer(([prevHours, prevMinutes, prevSeconds]) => [
      prevHours,
      prevMinutes,
      prevSeconds + 1,
    ]);
  }

  function startTimer() {
    setTimerState('running');
    setTimer([hours, minutes, seconds + 1]);
  }

  function pauseTimer() {
    setTimerState('paused');
  }

  function endTimer() {
    setTimerState('stopped');

    setTimer([0, 0, 0]);
  }

  useEffect(() => {
    const timerId = setTimeout(() => countUp(), 1000);
    return () => clearTimeout(timerId);
  }, [hours, minutes, seconds]);

  return (
    <div>
      <h2>Timer</h2>
      <dl>
        <dt>Hours</dt>
        <dd>{hours}</dd>
        <dt>Minutes</dt>
        <dd>{minutes}</dd>
        <dt>Seconds</dt>
        <dd>{seconds}</dd>
      </dl>
      <Button onClick={startTimer}>Start timer</Button>
      <Button onClick={pauseTimer}>Pause timer</Button>
      <Button onClick={endTimer}>End timer</Button>
    </div>
  );
}
