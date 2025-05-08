import { Event } from "../../domain/Event";
import { DatabaseConnection } from "../database/DatabaseConnection";

export interface EventRepository {
  getEvent: (eventId: string) => Promise<Event>;
}

export class EventRepositoryDatabase implements EventRepository {
  constructor(readonly connection: DatabaseConnection) {}

  async getEvent(eventId: string) {
    const [event] = await this.connection.query("select * from lucas.event where event_id = $1", [eventId]);

    return new Event(event.event_id, event.description, parseFloat(event.price));
  }

}