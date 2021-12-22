import { useState } from 'react';

type FormProps = {
  onSubmit: (
    description: string,
    date: Date,
    startTime: string,
    endTime: string
  ) => void;
};

export default function Form({ onSubmit }: FormProps): JSX.Element {
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(description, date, startTime, endTime);
  }
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Description:
        <textarea
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          required
          type="date"
          value={date.toDateString()}
          onChange={(event) => setDate(new Date(event.target.value))}
        />
      </label>
      <label>
        Start time:
        <input
          type="time"
          value={startTime}
          onChange={(event) =>
            setStartTime(new Date(event.target.value).toLocaleTimeString())
          }
        />
      </label>
      <label>
        End time:
        <input
          type="time"
          value={endTime}
          onChange={(event) =>
            setEndTime(new Date(event.target.value).toLocaleTimeString())
          }
        />
      </label>
    </form>
  );
}
