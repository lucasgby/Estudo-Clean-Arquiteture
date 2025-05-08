import pgp from "pg-promise";

export class GetTicket {
  constructor() {}

  async execute(ticketId: string): Promise<Output> {
    const connection = pgp()("postgres:postgres:postgres@localhost:5432/cleanArquiteture");
    const [ticket] = await connection.query("select * from lucas.ticket where ticket_id = $1", [ticketId]);
    await connection.$pool.end();
    return ticket;
  }
}

type Output = {
  ticketId: string;
  eventId: string;
  email: string;
  price: number
}