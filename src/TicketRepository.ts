import pgp from "pg-promise";
import { Ticket } from "./Ticket";

export interface TicketRepository {
  saveTicket: (ticket: Ticket) => Promise<void>;
  getTicket: (ticketId: string) => Promise<Ticket>;
}

export class TicketRepositoryDatabase implements TicketRepository {
  constructor() { }

  async saveTicket(ticket: Ticket) {
    const connection = pgp()("postgres://postgres:postgres@localhost:5432/cleanArquiteture");
    await connection.query(`insert into lucas.ticket (ticket_id, event_id, email, price, status, date) values
          ($1, $2, $3, $4, $5, $6)`, [ticket.ticketId, ticket.eventId, ticket.email, ticket.price, ticket.status, ticket.date]);
    await connection.$pool.end();
  }

  async getTicket(ticketId: string) {
    const connection = pgp()("postgres://postgres:postgres@localhost:5432/cleanArquiteture");
    const [ticket] = await connection.query("select * from lucas.ticket where ticket_id = $1", [ticketId]);

    await connection.$pool.end();
    
    return new Ticket(ticket.ticket_id, ticket.event_id, ticket.email, parseFloat(ticket.price), ticket.status, ticket.date);
  }
}