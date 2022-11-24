import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BiSearchAlt } from "react-icons/bi";

type SearchBarProps = {
  onSearch: string;
  onTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ onSearch, onTermChange }: SearchBarProps) => {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="country-search">
          <BiSearchAlt size={20} />
        </InputGroup.Text>
        <Form.Control
          onChange={onTermChange}
          value={onSearch}
          placeholder="Search by country name"
          aria-label="country"
          aria-describedby="country-search"
        />
      </InputGroup>
    </>
  );
};

export default SearchBar;
