import { PurchaseTicket } from "../src/PurchaseTicket";

test("Deve comprar um ingresso para o evento", async function () {
  // given
  const purchaseTicket = new PurchaseTicket();
  const getTicket = new GetTicket();
  const inputPurchaseTicket = {
    eventId: "185ff433-a7df-4dd6-ac86-44d219645cb1",
    email: "john.doe@gmail.com"
  };
  // when
  const outputPurchaseTicket = await purchaseTicket.execute(inputPurchaseTicket);
  // then
  expect(outputPurchaseTicket.ticketId).toBeDefined();
})