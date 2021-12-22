import type { ObjectId } from 'mongodb';

export type Booking = {
  _id: ObjectId;
  description: string;
  startDate: string;
  endDate: string;
  duration: {
    hours: number;
    minutes: number;
    seconds: number;
  };
};
