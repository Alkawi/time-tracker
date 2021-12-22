import type { Collection } from 'mongodb';
import { MongoClient } from 'mongodb';
import type { Booking } from './app/types';

let client: MongoClient;

export async function connectDatabase(url: string): Promise<void> {
  client = new MongoClient(url);
  await client.connect();
}

export function getCollection(): Collection<Booking[]> {
  return client.db().collection('tracked-time');
}
