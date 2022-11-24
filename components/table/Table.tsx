import React from "react";
import Table from "react-bootstrap/Table";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import SpinnerComponent from "../spinner/Spinner";
import { useFetchAllCountriesQuery } from "../../redux/features/countrySlice";
import { Country } from "../../types/countryTypes";
import styles from "../../styles/Table.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import { IoIosPeople } from "react-icons/io";
import { FaRulerCombined } from "react-icons/fa";
import SearchBar from "../search-field/SearchBar";

const TableContent = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = React.useState("");
  const { data, isLoading } = useFetchAllCountriesQuery();

  const handleTermInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container className={styles.container}>
      <SearchBar onSearch={searchTerm} onTermChange={handleTermInput} />
      {isLoading ? <SpinnerComponent /> : null}
      <Table
        striped
        bordered
        hover
        responsive
        className="shadow p-3 mb-5 bg-body rounded"
      >
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
              country?.name.common.toLowerCase().includes(searchTerm)
            )
            .map((country: Country) => (
              <tr key={country.name.common}>
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
                    <a>{country.name.common}</a>
                  </Link>
                </td>

                <td>{country.capital}</td>
                <td>{country.region}</td>

                <td>
                  <ul>
                    {/* display population as number */}
                    <li>
                      <IoIosPeople size={20} />:{" "}
                      {Number(country.population).toLocaleString()}
                    </li>
                    <li>
                      <FaRulerCombined size={15} />:{" "}
                      {Number(country.area).toLocaleString()} km²
                    </li>
                  </ul>
                </td>
                <td className="mx-auto">
                  <button
                    className={styles.addBtn}
                    onClick={() => dispatch(addToCart(country))}
                    disabled={cart.some((item: Country) =>
                      item.name.common === country.name.common ? true : false
                    )}
                  >
                    Add to Cart
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
