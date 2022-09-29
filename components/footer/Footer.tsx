import React from "react";
import Container from "react-bootstrap/Container";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Container>
      <footer>
        <div></div>
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
