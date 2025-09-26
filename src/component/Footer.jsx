import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Container>
        {/* responsive grid with horizontal padding for small screens */}
        <footer className="py-10 px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          <nav className="space-y-3">
            <h1 className="font-bold text-2xl">CS — Ticket System</h1>
            <p className="text-sm leading-relaxed">
              A CS Ticket System helps manage customer queries efficiently.
              Users submit issues as tickets, which support teams track,
              prioritize, and resolve systematically. It ensures better
              communication, faster response times, and organized workflow,
              improving overall customer satisfaction and service quality.
            </p>
          </nav>

          <nav className="space-y-2">
            <h6 className="footer-title font-medium">Company</h6>
            <a className="link link-hover block text-sm">About us</a>
            <a className="link link-hover block text-sm">Contact</a>
            <a className="link link-hover block text-sm">Jobs</a>
            <a className="link link-hover block text-sm">Press kit</a>
          </nav>

          <nav className="space-y-2">
            <h6 className="footer-title font-medium">Legal</h6>
            <a className="link link-hover block text-sm">Terms of use</a>
            <a className="link link-hover block text-sm">Privacy policy</a>
            <a className="link link-hover block text-sm">Cookie policy</a>
          </nav>

          <nav className="space-y-2">
            <h6 className="footer-title font-medium">Information</h6>
            <a className="link link-hover block text-sm">Privacy Policy</a>
            <a className="link link-hover block text-sm">Terms & Conditions</a>
            <a className="link link-hover block text-sm">Join US</a>
          </nav>

          <nav className="space-y-2">
            <h6 className="footer-title font-medium">Social Link</h6>
            <a className="link link-hover block text-sm">@CS - Ticket System</a>
            <a className="link link-hover block text-sm">@CS - Ticket System</a>
            <a className="link link-hover block text-sm">@CS - Ticket System</a>
            <a className="link link-hover block text-sm">support@cst.com</a>
          </nav>
        </footer>

        <h6 className="flex items-center justify-center pb-5 text-xs">
          @ 2025 CS— Ticket System. All rights reserved.
        </h6>
      </Container>
    </div>
  );
};

export default Footer;
