import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "next/image";
import { useFetchAllCountriesQuery } from "../../redux/features/countrySlice";
import { Country } from "../../types/countryTypes";
import { ListGroupItem } from "react-bootstrap";

const TableContent = () => {
  const { data, error, isLoading } = useFetchAllCountriesQuery();
  console.log(data);

  return (
    <Container>
      <Table
        striped
        bordered
        hover
        className="shadow-lg p-3 mb-5 bg-body rounded"
      >
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Languages</th>
            <th>Facts</th>
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
                <ul>
                  <li>Population: {country.population}</li>
                  <li>Area: {country.area}</li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableContent;