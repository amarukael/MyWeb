import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "../style/Home.css";
import imgprofile from "../img/profile.png";

function Home() {
  return (
    <Container className="mt-5 p-5">
      <Table>
        <tr>
          <td>
            <Table>
              <tr>
                <td>
                  <div className="ak-hallo">
                    <span>Hello I'm</span>
                  </div>
                </td>
              </tr>
              <tr className="mt-3 ak-name">
                <span>M. Fahmi Amaruddin</span>
              </tr>
              <tr className="ak-profession">
                <span>Web and Android Developer</span>
              </tr>
            </Table>
            <table>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faEnvelope} inverse />
                </td>
                <td>
                  <a
                    href="mailto:amarudin.ad@gmail.com"
                    className="ak-text text-decoration-none"
                  >
                    amarudin.ad@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faPhone} inverse />
                </td>
                <td>
                  <a
                    href="tel:+62821-3429-2226"
                    className="ak-text text-decoration-none"
                  >
                    +62821-3429-2226
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faLocationDot} inverse />
                </td>
                <td>
                  <span className="ak-text text-decoration-none">
                    Ketanggungan, Brebes, Jawa Tengah
                  </span>
                </td>
              </tr>
            </table>
          </td>
          <td>
            <div className="ak-img">
              <div className="img-border img-profile">
                <img src={imgprofile} alt="profile" className="img-fluid img-profile" />
              </div>
            </div>
          </td>
        </tr>
      </Table>
    </Container>
  );
}

export default Home;
