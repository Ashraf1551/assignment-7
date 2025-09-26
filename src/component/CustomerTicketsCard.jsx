import { toast } from "react-toastify";

const CustomerTicketsCard = ({
  ticket,
  setInPorgress,
  inProgress,
  setClicked,
  clicked,
  removeCard,
}) => {
  const alreadyAdded = clicked.some((c) => c.id === ticket.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (alreadyAdded) {
      toast.info(`"${ticket.title}" already in Task Status`);
      return;
    }
    toast.success(`Added "${ticket.title}" to Task Status`);
    setInPorgress(inProgress + 1);
    setClicked((prev) => [...prev, ticket]);
    // keep removeCard available but not invoked by default
    // if you want to remove from another list, uncomment:
    // if (removeCard) removeCard(ticket);
  };

  const formattedDate = ticket.createdAt
    ? new Date(ticket.createdAt).toLocaleDateString()
    : ticket.createdAt || "";

  return (
    <div
      onClick={handleClick}
      className="bg-white p-3 rounded-xl space-y-2.5 cursor-pointer h-full hover:shadow-xl transition-shadow"
    >
      <div className="flex justify-between items-start">
        <h1 className="font-semibold text-[18px]">{ticket.title}</h1>
        <p
          className={
            ticket.status === "Open"
              ? "flex items-center h-fit gap-2 bg-green-300 text-xs text-green-800 p-1.5 rounded-2xl"
              : ticket.status === "In Progress"
              ? "flex items-center gap-2 bg-yellow-200 text-xs text-yellow-800 p-1.5 rounded-2xl"
              : "flex items-center gap-2 bg-gray-200 text-xs text-gray-700 p-1.5 rounded-2xl"
          }
        >
          <span
            className={
              ticket.status === "Open"
                ? "inline-block h-4 w-4 rounded-full bg-green-500"
                : ticket.status === "In Progress"
                ? "inline-block h-4 w-4 rounded-full bg-yellow-500"
                : "inline-block h-4 w-4 rounded-full bg-gray-400"
            }
          ></span>
          <span className="flex-1">{ticket.status}</span>
        </p>
      </div>

      <p className="text-gray-700 text-[14px] line-clamp-3">{ticket.description}</p>

      <div className="flex justify-between text-[#6c7c8a] text-sm">
        <div className="flex gap-2.5 items-center">
          <p className="text-[14px]">#{ticket.id}</p>
          <p
            className={
              ticket.priority === "High"
                ? "text-red-700 text-[14px]"
                : ticket.priority === "Low"
                ? "text-green-700 text-[14px]"
                : ticket.priority === "Medium"
                ? "text-amber-600 text-[14px]"
                : ""
            }
          >
            {ticket.priority}
          </p>
        </div>

        <div className="flex gap-2.5 items-center">
          <p className="text-[14px]">{ticket.customer}</p>
          <p className="text-[14px]">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicketsCard;
