//import crypto from "crypto";

export class PurchaseTicket {
  constructor() { }

  async execute(input: Input): Promise<Output> {
    const ticketId = crypto.randomUUID();

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