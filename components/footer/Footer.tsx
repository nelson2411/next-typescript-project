import React from "react";
import Container from "react-bootstrap/Container";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <Container>
      <footer className="d-flex flex-column justify-content-center p-5">
        <div>
          <p>All rights reserved.</p>
          <p>
            This project was created by <strong>Nelson Rosales</strong>
          </p>
          {/* show year*/}
          <p>{new Date().getFullYear()}</p>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">
                <BsGithub />
              </a>
            </li>
            <li>
              <a href="#">
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
