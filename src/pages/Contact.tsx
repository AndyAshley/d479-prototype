import { Col, Container, Row } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";
import ContactForm from "../components/Forms/ContactForm";

const Contact = () => {
  return (
    <>
      <Container fluid className="py-5 px-0">
        <FeatureBlock title="Get in Touch" image="../images/contact-1.png">
          <p>
            Whether you're planning a visit or just want to learn more about
            Taniti, we'd love to hear from you. Reach out to us with any
            questions, comments, or feedback, and we'll get back to you as soon
            as we can. Feel free to contact us via email, phone, or by filling
            out the form below. Our team is here to help you plan your perfect
            Taniti experience.
          </p>
        </FeatureBlock>
      </Container>
      <Container fluid className="py-5 grey-bg">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2>Contact Information</h2>
              <p>
                <b>Hours:</b> Monday - Friday, 9:00 AM - 5:00 PM (PST)
              </p>
              <p>
                <b>Email:</b> <a href="mailto:#">questions@taniti.com</a>
              </p>
              <p>
                <b>Phone:</b> <a href="tel:#">555-555-5555</a>
              </p>
              <p>
                <b>Address:</b> 123 Oceanview Drive, Taniti Island, Pacific
                Ocean
              </p>
              <p>
                <small>
                  <b>Note:</b> We are <em className="text-muted">closed</em> on{" "}
                  <em className="text-muted">weekends</em> and{" "}
                  <em className="text-muted">major holidays</em>.
                </small>
              </p>
            </Col>
            <Col lg={6}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
