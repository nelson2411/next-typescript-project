import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";
import { Country } from "../types/countryTypes";
import Layout from "../components/layout/Layout";

const TableCart = () => {
  const cart = useSelector(selectCart);
  console.log(cart);

  return (
    <Layout>
      <div>
        {cart.length === 0 ? <p>Cart is empty</p> : null}
        {cart.map((country: Country) => (
          <div key={country.name.common}>
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default TableCart;
