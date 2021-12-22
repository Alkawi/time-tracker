import type { Booking } from '../../types';

type CardProps = {
  booking: Booking;
};

export default function Card({ booking }: CardProps): JSX.Element {
  return (
    <article>
      <span>Description: {booking.description}</span>
      <span>Start date: {booking.startDate}</span>
      <span>End date: {booking.endDate}</span>
      <span>Duration: {booking.duration}</span>
    </article>
  );
}
