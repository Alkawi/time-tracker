import Timer from './Timer';

export default {
  title: 'Component/Timer',
  component: Timer,
};

const duration = {
  hours: 1,
  minutes: 13,
  seconds: 42,
};

export const TimerExample = (): JSX.Element => (
  <Timer
    duration={duration}
    pauseTimer={console.log}
    startTimer={console.log}
    endTimer={console.log}
  />
);
