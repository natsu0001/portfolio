import Container from "../layout/Container";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            gap-4
          "
        >
          <p className="text-sm text-text-2">
            © 2026 Abhishek. All rights reserved.
          </p>

          <p className="text-sm text-text-2">
            Designed & Built with React +
            TypeScript
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;