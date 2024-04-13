import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

type year = number;

const Footer = () => {
  const currentYear: year = new Date().getFullYear();
  return (
    <Container fluid className="pt-3 px-3 blue-bg">
      <Container>
        <Row className="align-items-start">
          <Col
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <div className="bg-light rounded p-2">
              <img
                src="../images/taniti-logo.png"
                alt="Taniti Logo"
                height="75px"
              />
            </div>
            <div className="d-flex flex-column">
              <p className="fw-bold text-center mt-2">Follow Us on Social!</p>
              <ul className={styles.socialIcons}>
                <li>
                  <a
                    className="pointer"
                    href="https://www.facebook.com"
                    target="_blank"
                  >
                    <img
                      src="../images/fb-social.png"
                      alt="Facebook"
                      width="40px"
                      height="40px"
                      className="m-1"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="pointer"
                    href="https://www.linkedin.com"
                    target="_blank"
                  >
                    <img
                      src="../images/linkedin-social.png"
                      alt="Facebook"
                      width="40px"
                      height="40px"
                      className="m-1"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="pointer"
                    href="https://www.twitter.com"
                    target="_blank"
                  >
                    <img
                      src="../images/x-social.png"
                      alt="Facebook"
                      width="40px"
                      height="40px"
                      className="m-1"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="pointer"
                    href="https://www.tiktok.com"
                    target="_blank"
                  >
                    <img
                      src="../images/tiktok-social.png"
                      alt="Facebook"
                      width="40px"
                      height="40px"
                      className="m-1"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <div className="d-flex flex-column">
              <p className="fw-bold">Explore Taniti</p>
              <NavLink to="/cuisine">Cuisine</NavLink>
              <NavLink to="/lodging">Lodging</NavLink>
              <NavLink to="/entertainment">Entertainment</NavLink>
              <NavLink to="/locations">Locations</NavLink>
              <NavLink to="/transportation">Transportation</NavLink>
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <div className="d-flex flex-column">
              <p className="fw-bold">Additional Links</p>
              <NavLink to="/faq">FAQ</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <a className="pointer">Privacy Policy</a>
              <a className="pointer">Terms of Service</a>
              <a className="pointer">Sitemap</a>
            </div>
          </Col>
        </Row>
        <Row className="py-3">
          <Col xs={12} className="text-center p-0">
            <small>
              &copy; {currentYear} - Taniti | Discover Your Adventure
            </small>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
