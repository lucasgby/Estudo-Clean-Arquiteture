export class Ticket {
  
  constructor(readonly ticketId: string, readonly eventId: string, readonly email: string, readonly price: number,
    readonly status: string, readonly date: Date
  ){}

  static create(eventId: string, email: string, price: number) {
    const ticketId = crypto.randomUUID();
    const status = "active";
    const date = new Date();

    return new Ticket(ticketId, eventId, email, price, status, date);
  }
}