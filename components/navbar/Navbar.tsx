import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { GiWorld } from "react-icons/gi";
import { FaLuggageCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";
const NavigationBar = () => {
  const cart = useSelector(selectCart);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <GiWorld size={30} /> Countries App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">About this Project</Nav.Link>
            <Nav.Link href="#pricing">
              <FaLuggageCart size={30} />
              <Badge bg="secondary">{cart.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
