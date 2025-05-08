//import crypto from "crypto";

import pgp from "pg-promise";

export class PurchaseTicket {
  constructor() { }

  async execute(input: Input): Promise<Output> {
    const ticketId = crypto.randomUUID();
    const connection = pgp()("postgres:postgres:postgres@localhost:5432/cleanArquiteture");
    const [event] = await connection.query("select * from lucas.event where event_id = $1", [input.eventId]);

    await connection.query(`insert into lucas.ticket (ticket_id, event_id, email, price, status, date) values
      ($1, $2, $3, $4, $5, $6)`, [ticketId, input.eventId, input.email, parseFloat(event.prince), "created", new Date()]);
    await connection.$pool.end();
    return {
      ticketId
    }
  }
}

type Input = {
  eventId: string;
  email: string;
}

type Output = {
  ticketId: string
}