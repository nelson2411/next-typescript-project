import React from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Layout from "../components/layout/Layout";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Country } from "../types/countryTypes";
import { GetServerSideProps } from "next";
import { IoIosPeople } from "react-icons/io";
import { FaRulerCombined } from "react-icons/fa";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import styles from "../styles/CountryPage.module.css";

type Data = {
  data: Country;
};

const CountryPage = ({ data }: Data) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Layout>
      <Container className={styles.container}>
        <Card className="text-center shadow">
          <Card.Header className="p-4">
            <img
              src={data.flags.png}
              alt={data.name.common}
              width={225}
              height={150}
            />
          </Card.Header>
          <Card.Body>
            <Card.Title className="fs-3">{data.name.official}</Card.Title>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Capital:</Accordion.Header>
                <Accordion.Body className="fw-bold fs-5">
                  <p>{data.capital}</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Region:</Accordion.Header>
                <Accordion.Body className="fw-bold fs-5">
                  {data.region}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Sub-Region:</Accordion.Header>
                <Accordion.Body className="fw-bold fs-5">
                  {data.subregion}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Population:</Accordion.Header>
                <Accordion.Body className="fw-bold fs-5">
                  <IoIosPeople size={30} />{" "}
                  {Number(data.population).toLocaleString()}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Area:</Accordion.Header>
                <Accordion.Body className="fw-bold fs-5">
                  <FaRulerCombined size={20} />{" "}
                  {Number(data.area).toLocaleString()} km²
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Languages:</Accordion.Header>
                <Accordion.Body className="fw-bold fs-5">
                  {data.languages &&
                    Object.values(data.languages).map((language) => (
                      <li key={language} className="fw-bold">
                        {language}
                      </li>
                    ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Currencies:</Accordion.Header>
                <Accordion.Body className="fw-bold fs-5">
                  {data.currencies &&
                    Object.entries(Object.values(data.currencies)[0]).map(
                      ([key, value]) => (
                        <li key={key}>
                          {key}: <i>{value}</i>
                        </li>
                      )
                    )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="my-3 p-2 d-flex justify-content-around">
              <Link href="/">
                <Button variant="primary" className="px-3">
                  Go Back!
                </Button>
              </Link>
              <Button
                variant="primary"
                onClick={() => dispatch(addToCart(data))}
                className="px-3 btn btn-danger"
              >
                Add to Cart
              </Button>
            </div>
          </Card.Body>
          <Card.Footer className="text-muted">{data.name.common}</Card.Footer>
        </Card>
      </Container>
    </Layout>
  );
};

export default CountryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { country } = context.query;
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/name/${country}`
  );
  return {
    props: {
      data: data[0],
    },
  };
};
