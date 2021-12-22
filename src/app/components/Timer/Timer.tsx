import Button from '../Button/Button';
import styled from 'styled-components';

type TimerProps = {
  duration: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  startTimer: () => void;
  pauseTimer: () => void;
  endTimer: () => void;
};
export default function Timer({
  duration,
  startTimer,
  pauseTimer,
  endTimer,
}: TimerProps): JSX.Element {
  return (
    <TimerContainer>
      <h2>Timer</h2>
      <dl>
        <dt>Hours</dt>
        <dd>{duration.hours}</dd>
        <dt>Minutes</dt>
        <dd>{duration.minutes}</dd>
        <dt>Seconds</dt>
        <dd>{duration.seconds}</dd>
      </dl>
      <div>
        <Button onClick={startTimer}>Start timer</Button>
        <Button onClick={pauseTimer}>Pause timer</Button>
        <Button onClick={endTimer}>End timer</Button>
      </div>
    </TimerContainer>
  );
}

const TimerContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 1rem;
`;
