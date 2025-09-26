import Container from "./Container";
import CustomerTicketsCard from "./CustomerTicketsCard";
import Resolved from "./Resolved";
import Task from "./Task";

const CustomerTickets = ({
  cardData,
  setInPorgress,
  inProgress,
  setClicked,
  clicked,
  setResolve,
  resolve,
  complete,
  setComplete,
  removeTicketFromData,
  removeCard, // <-- add this prop so we can forward it to Task
}) => {
  const tickets = cardData || [];

  return (
    <div className="bg-[#f5f5f5] text-cyan-950 ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold pt-9 pb-8">Customer Tickets</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tickets.map((ticket) => (
                <article key={ticket.id} className="h-full">
                  <CustomerTicketsCard
                    ticket={ticket}
                    setClicked={setClicked}
                    clicked={clicked}
                    inProgress={inProgress}
                    setInPorgress={setInPorgress}
                    removeCard={() => {}}
                  />
                </article>
              ))}
            </div>
          </div>

          <div className="md:col-span-1 mt-6 md:mt-0">
            <h1 className="text-2xl font-bold pt-0 md:pt-9 pb-3">Task Status</h1>
            <Task
              setInPorgress={setInPorgress}
              inProgress={inProgress}
              clicked={clicked}
              setClicked={setClicked}                // <-- forward setter so Task can clear the item
              setResolve={setResolve}
              resolve={resolve}
              complete={complete}
              setComplete={setComplete}
              removeTicketFromData={removeTicketFromData}
              removeCard={removeCard}                // <-- forward removeCard fallback as well
            />

            <h1 className="text-2xl font-bold pt-3 pb-1">Resolved Task</h1>
            <Resolved complete={complete} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerTickets;
