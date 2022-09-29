import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useFetchAllCountriesQuery } from "../../redux/features/countrySlice";
import { Country } from "../../types/countryTypes";
import styles from "../../styles/Table.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { IoIosPeople } from "react-icons/io";

const TableContent = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchAllCountriesQuery();
  console.log(data);

  return (
    <Container>
      <Table
        striped
        bordered
        hover
        responsive
        className="shadow-lg p-3 mb-5 mt-5 bg-body rounded"
      >
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Languages</th>
            <th>Currencies</th>
            <th>Facts</th>
            <th className={styles.btnColumn}>Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((country: Country) => (
            <tr key={country.name.common}>
              <td>
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  width={80}
                  height={50}
                />
              </td>
              <td>{country.name.common}</td>
              <td>{country.capital}</td>
              <td>{country.region}</td>
              <td>
                {/* Display values of the language object */}
                {country.languages &&
                  Object.values(country.languages).map((language) => (
                    <li key={language}>{language}</li>
                  ))}
              </td>
              <td>
                {/* Display values of the currency object */}
                {country.currencies &&
                  Object.entries(Object.values(country.currencies)[0]).map(
                    ([key, value]) => (
                      <li key={key}>
                        {key}: {value}
                      </li>
                    )
                  )}
              </td>
              <td>
                <ul>
                  {/* display population as number */}
                  <li>
                    <IoIosPeople size={20} />: {Number(country.population)}
                  </li>
                  <li>Area: {country.area}</li>
                </ul>
              </td>
              <td className="mx-auto">
                <button
                  className={styles.addBtn}
                  onClick={() => dispatch(addToCart(country))}
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
