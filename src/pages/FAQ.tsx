import { Container } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";

const FAQ = () => {
  return (
    <>
      <Container fluid className="py-5 px-0">
        <FeatureBlock
          title="Got Questions? We've Got Answers!"
          image="../images/faq-1.png"
          cta={{ label: "Contact Us", link: "/contact" }}
        >
          <p>
            Planning your visit to Taniti should be as smooth and enjoyable as
            the island breeze. Whether you're wondering about the best time to
            visit, how to get around, or what to pack for your trip, our FAQ
            section is here to help. Dive into our compiled list of frequently
            asked questions below and find all the information you need to make
            your Taniti adventure unforgettable. If you don’t find what you’re
            looking for, don’t hesitate to reach out—we’re here to ensure your
            visit is nothing short of perfect.
          </p>
        </FeatureBlock>
      </Container>
      <Container fluid className="grey-bg py-5">
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <h2>Frequently Asked Questions</h2>
          <div className="text-start mt-5 bg-light p-4 rounded shadow">
            <div className="qa-group">
              <p>
                <span>Q</span>: Do I need an adapter for my electronics?
              </p>
              <p>
                <span>A</span>: Power outlets are 120 volts (the same as in the
                United States).{" "}
              </p>
            </div>
            <div className="qa-group">
              <p>
                <span>Q</span>: When is last call for alcohol?
              </p>
              <p>
                <span>A</span>: Alcohol is not allowed to be served or sold
                between the hours of midnight and 9:00 a.m.{" "}
              </p>
            </div>
            <div className="qa-group">
              <p>
                <span>Q</span>: What is the drinking age on Taniti?
              </p>
              <p>
                <span>A</span>: The drinking age on Taniti is 18 and the
                drinking age is not strictly enforced.
              </p>
            </div>
            <div className="qa-group">
              <p>
                <span>Q</span>: Is English spoken on Taniti?
              </p>
              <p>
                <span>A</span>: Many younger Tanitians speak fluent English.
                Very little English is spoken in rural areas, especially by the
                older residents.
              </p>
            </div>
            <div className="qa-group">
              <p>
                <span>Q</span>: Are there medical facilities on the island?
              </p>
              <p>
                <span>A</span>: There is one hospital and several clinics. The
                hospital has many multilingual employees.
              </p>
            </div>
            <div className="qa-group">
              <p>
                <span>Q</span>: What is the crime rate on Taniti?
              </p>
              <p>
                <span>A</span>: Violent crime is very rare on Taniti, but as
                tourism increases, there are more reports of pickpocketing and
                other petty crimes.{" "}
              </p>
            </div>
            <div className="qa-group">
              <p>
                <span>Q</span>: Are attractions and restaurants open on
                holidays?
              </p>
              <p>
                <span>A</span>: Taniti enjoys a large number of national
                holidays, and many tourist attractions and restaurants will be
                closed on holidays, so visitors should plan accordingly.
              </p>
            </div>
            <div className="qa-group">
              <p>
                <span>Q</span>: What is the currency used on Taniti?
              </p>
              <p>
                <span>A</span>: Taniti uses the U.S. dollar as its currency, but
                many businesses will also accept euros and yen. Several banks
                facilitate currency exchange, and many businesses accept major
                credit cards.
              </p>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default FAQ;
