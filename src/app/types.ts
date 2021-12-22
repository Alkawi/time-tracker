export type Booking = {
  description: string;
  startDate: string;
  endDate: string;
  duration: {
    hours: number;
    minutes: number;
    seconds: number;
  };
};
