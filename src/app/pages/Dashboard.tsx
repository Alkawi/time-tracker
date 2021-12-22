import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form/Form';
import Timer from '../components/Timer/Timer';

export default function Dashboard(): JSX.Element {
  const [[hours, minutes, seconds], setTimer] = useState([0, 0, 0]);
  const [startOfDuration, setStartOfDuration] = useState('');
  const [endOfDuration, setEndOfDuration] = useState('');
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
    if (hours === 0 && minutes === 0 && seconds === 0) {
      setStartOfDuration(new Date().toTimeString());
    }
    setTimer([hours, minutes, seconds + 1]);
  }

  function pauseTimer() {
    setTimerState('paused');
  }

  function endTimer() {
    setTimerState('stopped');
    setEndOfDuration(new Date().toTimeString());
    setTimer([0, 0, 0]);
  }

  useEffect(() => {
    const timerId = setTimeout(() => countUp(), 1000);
    return () => clearTimeout(timerId);
  }, [hours, minutes, seconds]);

  async function handleSubmit(
    description: string,
    startDate: string,
    endDate: string
  ) {
    const duration = { hours, minutes, seconds };

    endTimer();
    if (startOfDuration !== '') {
      startDate = startOfDuration;
    }
    if (endOfDuration !== '') {
      endDate = endOfDuration;
    }
    if (
      duration.hours === 0 &&
      duration.minutes === 0 &&
      duration.seconds === 0
    ) {
      const durationByForm =
        new Date(endDate).getTime() - new Date(startDate).getTime();
      console.log(durationByForm);
    }
    const response = await fetch('/api/tracked-time', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, startDate, endDate, duration }),
    });
    if (response.ok) {
      console.log('it works');
    } else {
      console.error("doesn't work");
    }
  }
  return (
    <div>
      <Timer
        duration={{ hours, minutes, seconds }}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        endTimer={endTimer}
      />
      <Form onSubmit={handleSubmit} />

      <Link to="/logs">
        <button>See history</button>
      </Link>
    </div>
  );
}
