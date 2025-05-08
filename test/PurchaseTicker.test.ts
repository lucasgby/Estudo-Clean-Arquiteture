import { EventRepositoryDatabase } from "../src/EventRepository";
import { GetTicket } from "../src/GetTicket";
import { PurchaseTicket } from "../src/PurchaseTicket";
import { TicketRepositoryDatabase } from "../src/TicketRepository";

test("Deve comprar um ingresso para o evento", async function () {
  // given
  const ticketRepository = new TicketRepositoryDatabase();
  const eventRepository = new EventRepositoryDatabase();

  const purchaseTicket = new PurchaseTicket(ticketRepository, eventRepository);
  const getTicket = new GetTicket(ticketRepository);
  
  const inputPurchaseTicket = {
    eventId: "185ff433-a7df-4dd6-ac86-44d219645cb1",
    email: "john.doe@gmail.com"
  };
  // when
  const outputPurchaseTicket = await purchaseTicket.execute(inputPurchaseTicket);
  const outputGetTicket = await getTicket.execute(outputPurchaseTicket.ticketId);
  
  // then
  expect(outputPurchaseTicket.ticketId).toBeDefined();
  expect(outputGetTicket.eventId).toBe("185ff433-a7df-4dd6-ac86-44d219645cb1");
  expect(outputGetTicket.email).toBe("john.doe@gmail.com");
  expect(outputGetTicket.price).toBe(100);

})