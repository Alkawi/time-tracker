import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import useFetch from '../hooks/useFetch';
import type { Booking } from '../types';

export default function Logs(): JSX.Element {
  const [bookings] = useFetch<Booking[]>('/api/bookings');
  console.log(bookings);

  return (
    <div>
      {bookings &&
        bookings.map((booking) => {
          <Card booking={booking} />;
        })}
      {bookings && bookings.length === 0 && <article>No logs found</article>}
      <Link to="/">
        <button>Back to timer</button>
      </Link>
    </div>
  );
}
