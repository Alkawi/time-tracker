import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const Start = (): JSX.Element => (
  <Button onClick={() => console.log('start')}>Start</Button>
);
