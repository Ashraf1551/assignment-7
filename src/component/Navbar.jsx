import { useState } from "react";
import Container from "./Container";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-black border-b border-gray-100">
      <Container>
        {/* Responsive: stack on small screens, horizontal on md+ */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl">CS — Ticket System</h1>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden px-3 py-1 rounded bg-gray-100 text-sm"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>

          {/* Menu: show on md+, toggle on mobile */}
          <nav
            className={`flex-col md:flex-row md:flex items-start md:items-center w-full md:w-auto gap-3 ${
              open ? "flex" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row md:gap-3 gap-2 text-[15px] text-gray-700">
              <a className="hover:underline" href="#">
                Home
              </a>
              <a className="hover:underline" href="#">
                FAQ
              </a>
              <a className="hover:underline" href="#">
                Changelog
              </a>
              <a className="hover:underline" href="#">
                Blog
              </a>
              <a className="hover:underline" href="#">
                Download
              </a>
              <a className="hover:underline" href="#">
                Contact
              </a>
            </div>

            <div className="mt-2 md:mt-0 md:ml-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 rounded text-white text-[16px]">
                + New Ticket
              </button>
            </div>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
