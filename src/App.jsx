import { useEffect, useState } from "react";
import "./App.css";
import CustomerTickets from "./component/CustomerTickets";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import SHowCard from "./component/ShowCard";

function App() {
  const [inProgress, setInPorgress] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [resolve, setResolve] = useState(0);
  const [complete, setComplete] = useState([]);
  const [filterCard, setFilterCard] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCardData(data || []))
      .catch((err) => console.error("Failed to load data.json:", err))
      .finally(() => setLoading(false));
  }, []);

  const removeCard = (card) => {
    const filtered = clicked.filter((c) => c.id !== card.id);
    setClicked(filtered);
  };

  // remove ticket from main tickets list (used when marking complete)
  const removeTicketFromData = (ticketId) => {
    setCardData((prev) => prev.filter((t) => t.id !== ticketId));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 animate-pulse"></div>
          <h2 className="text-2xl font-medium text-indigo-600 animate-pulse">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* horizontal margins for entire app except Footer */}
      <div className="px-4 sm:px-6 md:px-8">
        <Navbar />
        <SHowCard resolve={resolve} inProgress={inProgress} />
        <CustomerTickets
          setClicked={setClicked}
          clicked={clicked}
          inProgress={inProgress}
          setInPorgress={setInPorgress}
          cardData={cardData || []}
          setResolve={setResolve}
          resolve={resolve}
          complete={complete}
          setComplete={setComplete}
          removeCard={removeCard}
          filterCard={filterCard}
          setFilterCard={setFilterCard}
          removeTicketFromData={removeTicketFromData}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
