import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cartSlice';
import { Country } from '../types/countryTypes';
import styles from '../styles/Cart.module.css';
import Table from 'react-bootstrap/Table';
import Layout from '../components/layout/Layout';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FcElectronics } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';
import Link from 'next/link';

const TableCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  return (
    <Layout>
      <Container className={styles.container}>
        <div className='my-5'>
          <Link href='/' passHref>
            <Button variant='outline-primary'>Go Back!</Button>
          </Link>
        </div>
        <Table striped className='shadow-lg my-5'>
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Region</th>
              <th>Sub-Region</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <h3>
                <FcElectronics size={70} />
                Ooops, you must add countries to the cart!
              </h3>
            ) : null}
            {cart.map((country: Country) => (
              <tr key={country.name.common}>
                <td className='p-3'>
                  <img src={country.flags?.png} alt={country.name.common} width={80} height={50} />
                </td>
                <td>{country.name.common}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td>{country.subregion}</td>

                <td>
                  <button className={styles.delete}>
                    <AiTwotoneDelete
                      size={25}
                      onClick={() => dispatch(removeFromCart(country.cca2))}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
};

export default TableCart;
