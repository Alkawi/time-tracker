import { useState } from 'react';
import styled from 'styled-components';

type FormProps = {
  onSubmit: (
    description: string,
    startDate: string,
    endDate: string,
    duration: string
  ) => void;
};

export default function Form({ onSubmit }: FormProps): JSX.Element {
  const [description, setDescription] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(description, startDate, endDate, duration);
  }
  return (
    <InputForm onSubmit={(event) => handleSubmit(event)}>
      <label>
        Description:
        <textarea
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Start date:
        <input
          type="datetime-local"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </label>

      <label>
        End date:
        <input
          type="datetime-local"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </label>
      <label>
        Duration:
        <input
          type="time"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </InputForm>
  );
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
