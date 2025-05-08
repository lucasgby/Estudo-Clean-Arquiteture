import { TicketRepository } from "../../infra/repository/TicketRepository";

export class CalcelTicket {
  constructor(readonly ticketRepository: TicketRepository){}

  async execute(ticketId: string): Promise<void> {
    const ticket = await this.ticketRepository.getTicket(ticketId);
    ticket.cancel();

    await this.ticketRepository.saveTicket(ticket);
  }
}