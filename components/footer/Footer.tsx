import React from "react";
import Container from "react-bootstrap/Container";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <Container fluid className="bg-dark">
      <footer className="d-flex flex-column justify-content-center p-3">
        <div className={styles.footer_text}>
          <p>All rights reserved &copy; {new Date().getFullYear()}</p>
          <p>
            This project was created by <strong>Nelson Rosales</strong>
          </p>
        </div>
        <div>
          <ul className={styles.footer_links}>
            <li>
              <a href="#">
                <BsGithub size={30} />
              </a>
            </li>
            <li>
              <a href="#">
                <BsLinkedin size={30} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
