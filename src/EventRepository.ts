import { Event } from "./Event";
import pgp from "pg-promise";

export interface EventRepository {
  getEvent: (eventId: string) => Promise<Event>;
}

export class EventRepositoryDatabase implements EventRepository {
  async getEvent(eventId: string) {
    const connection = pgp()("postgres://postgres:postgres@localhost:5432/cleanArquiteture");
    const [event] = await connection.query("select * from lucas.event where event_id = $1", [eventId]);
    await connection.$pool.end();

    return new Event(event.event_id, event.description, parseFloat(event.price));
  }


}