import React from 'react';
import { useCallback } from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import SpinnerComponent from '../spinner/Spinner';
import { useFetchAllCountriesQuery } from '../../redux/features/countrySlice';
import { Country } from '../../types/countryTypes';
import styles from '../../styles/Table.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectLastcartAction, clearLastAction } from '../../redux/slices/cartSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import { IoIosPeople } from 'react-icons/io';
import { FaRulerCombined } from 'react-icons/fa';
import SearchBar from '../search-field/SearchBar';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import cart from 'pages/cart';
import { last } from 'cypress/types/lodash';

const TableContent = () => {
  const lastAction = useSelector(selectLastcartAction);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = React.useState('');

  const { data, isLoading } = useFetchAllCountriesQuery();

  const handleTermInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  console.log('Cart from TableContent:', cart);
  console.log(data?.length);
  console.log(cart.length);

  return (
    <Container className={styles.container}>
      <SearchBar onSearch={searchTerm} onTermChange={handleTermInput} />
      {isLoading ? <SpinnerComponent /> : null}
      {lastAction === 'duplicated' && (
        <Alert
          variant='warning'
          dismissible
          onClose={() => dispatch(clearLastAction())}
          className='mt-3'
        >
          <strong>⚠️ This country is already in your cart!</strong>
        </Alert>
      )}
      {lastAction === 'added' && (
        <Alert
          variant='success'
          dismissible
          onClose={() => dispatch(clearLastAction())}
          className='mt-3'
        >
          <strong>✅ Country added to your cart!</strong>
        </Alert>
      )}

      <Table striped bordered hover responsive className='shadow p-3 mb-5 bg-body rounded'>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Region</th>

            <th>Facts</th>
            <th className={styles.btnColumn}>Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {data
            ?.filter((country: Country) =>
              country?.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .map((country: Country) => (
              <tr key={country.cca2 ?? country.name.common}>
                <td>
                  <Link href={`/${country.name.common}`}>
                    <img
                      src={country.flags.png}
                      alt={country.name.common}
                      width={80}
                      height={50}
                      className={styles.link}
                    />
                  </Link>
                </td>

                <td>
                  <Link href={`/${country.name.common}`} passHref>
                    <a className={styles.link}>{country.name.common}</a>
                  </Link>
                </td>

                <>{country.capital?.[0] ?? '-'}</>
                <td>{country.region}</td>

                <td>
                  <ul>
                    {/* display population as number */}
                    <li>
                      <IoIosPeople size={20} />: {Number(country.population).toLocaleString()}
                    </li>
                    <li>
                      <FaRulerCombined size={15} />: {Number(country.area).toLocaleString()} km²
                    </li>
                  </ul>
                </td>
                <td className='mx-auto'>
                  <button className={styles.addBtn} onClick={() => dispatch(addToCart(country))}>
                    <span className={styles.addBtnText}>Add to Cart</span>
                    <span className={styles.addBtnIcon}>
                      <BsFillBookmarkHeartFill size={20} />
                    </span>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableContent;
