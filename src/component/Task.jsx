import { toast } from "react-toastify";

const Task = ({
  clicked = [],
  // prefer these setters from parent
  setClicked, // optional — will be used to clear task status item
  inProgress,
  setInPorgress,
  resolve,
  setResolve,
  complete = [],
  setComplete,
  removeCard, // optional fallback to remove from clicked list
  removeTicketFromData, // optional: remove from main tickets list
}) => {
  const handleComplete = (item) => {
    toast.success(`Completed "${item.title}"`);
    // update counters
    if (typeof setInPorgress === "function") {
      setInPorgress((prev) => Math.max(0, prev - 1));
    }
    if (typeof setResolve === "function") {
      setResolve((prev) => prev + 1);
    }
    // add to resolved list
    if (typeof setComplete === "function") {
      setComplete((prev) => [...prev, item]);
    }
    // remove from Task Status (clicked)
    if (typeof setClicked === "function") {
      setClicked((prev) => prev.filter((c) => c.id !== item.id));
    } else if (typeof removeCard === "function") {
      // legacy name: removeCard expected to remove from clicked
      removeCard(item);
    }
    // remove from main tickets list if parent provided the callback
    if (typeof removeTicketFromData === "function") {
      removeTicketFromData(item.id);
    }
  };

  return (
    <div className="p-3 rounded-xl">
      {clicked.length === 0 ? (
        <h1 className="text-gray-600">Select a ticket to add to Task Status</h1>
      ) : (
        <div className="space-y-4">
          {clicked.map((item) => (
            <div key={item.id} className="p-3 rounded-lg shadow bg-gray-50">
              <h1 className="font-semibold text-[18px] mb-3">{item.title}</h1>
              <button
                onClick={() => handleComplete(item)}
                className="bg-green-700 w-full py-2 rounded-xl text-white font-medium cursor-pointer hover:bg-green-600"
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Task;
