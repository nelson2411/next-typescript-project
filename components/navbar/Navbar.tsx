import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import { GiWorld } from 'react-icons/gi';
import { FaLuggageCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';
import { useState } from 'react';
import { Country } from '../../types/countryTypes';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

const NavigationBar = () => {
  const cart = useSelector(selectCart);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className='shadow' fixed='top'>
      <Container>
        <Link href='/' passHref>
          <Navbar.Brand>
            <GiWorld size={30} /> Countries App
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#features'>About this Project</Nav.Link>
            <Nav.Link href='#pricing'>
              <FaLuggageCart size={30} onClick={toggleShow} />
              <Badge bg='secondary'>{cart.length}</Badge>
              <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Countries you like!</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Region</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.length === 0 ? (
                        <p>No countries added to cart yet!</p>
                      ) : (
                        cart.map((country: Country) => (
                          <tr key={country.name.common}>
                            <td>
                              <img
                                src={country.flags?.png}
                                alt={country.name.common}
                                width={70}
                                height={40}
                              />
                            </td>
                            <td>{country.name.common}</td>
                            <td>{country.capital}</td>
                            <td>{country.region}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                  <Link href='/cart'>
                    <Button variant='outline-danger' className='w-75 my-3 mx-auto d-block'>
                      Go to Cart
                    </Button>
                  </Link>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
