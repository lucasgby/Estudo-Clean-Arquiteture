import { Ticket } from "./Ticket";

import { EventRepository } from "./EventRepository";
import { TicketRepository } from "./TicketRepository";

export class PurchaseTicket {
  constructor(readonly ticketRepository: TicketRepository, readonly eventRepository: EventRepository){}

  async execute(input: Input): Promise<Output> {
    const event = await this.eventRepository.getEvent(input.eventId);
    const ticket = Ticket.create(input.eventId, input.email, event.price);

    await this.ticketRepository.saveTicket(ticket);

    return {
      ticketId: ticket.ticketId
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