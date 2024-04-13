import { Container, Row, Col } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import { transportationData } from "../constants/constants";
import Slideshow, { SlideshowData } from "../components/Slideshow/Slideshow";

const Transportation = () => {
  const slides: SlideshowData[] = [
    {
      image: "transportation-slide-1.png",
      heading: "Seamless Travel to and Around Taniti",
      text: "Journeying to Taniti and navigating the island couldn't be simpler, with a host of convenient options designed for every type of traveler. Whether you're flying in to kickstart your tropical adventure or sailing into the picturesque Yellow Leaf Bay, your arrival is just the beginning.",
    },
    {
      image: "transportation-slide-2.png",
      heading: "Explore Taniti Your Way",
      text: "Discover the ease of exploring Taniti's wonders—from the vibrant streets of Taniti City to the tranquil beaches and lush rainforests that lie beyond. Embrace the freedom to explore Taniti your way, with all the information you need right here.",
    },
    {
      image: "transportation-slide-3.png",
      heading: "From Arrival to Adventure",
      text: "Learn about our expanding airport, efficient public transport, and the charm of exploring at your own pace by bike or rental car. Once here, Taniti is yours to discover, from its walkable city streets to the scenic routes that crisscross the island.",
    },
  ];

  return (
    <Container fluid className="pt-5 px-0">
      <Container className="pb-5">
        <h2>Seamless Travel to and Around Taniti</h2>
        <p>
          Journeying to Taniti and navigating the island couldn't be simpler,
          with a host of convenient options designed for every type of traveler.
          Whether you're flying in to kickstart your tropical adventure or
          sailing into the picturesque Yellow Leaf Bay, your arrival is just the
          beginning. Once here, discover the ease of exploring Taniti's
          wonders—from the vibrant streets of Taniti City to the tranquil
          beaches and lush rainforests that lie beyond. Learn about our
          expanding airport, efficient public transport, and the charm of
          exploring at your own pace by bike or rental car. Embrace the freedom
          to explore Taniti your way, with all the information you need right
          here.
        </p>
      </Container>
      <FeatureBlock
        title="Arrival by Sea"
        image="../images/transportation_sea.png"
        cta={{ label: "Cruise Schedules", link: "#" }}
      >
        <p>
          For those who prefer the romance of the sea, arrive in style on a
          cruise ship docking at Yellow Leaf Bay. It’s a unique way to begin
          your Taniti experience, with the island greeting you in panoramic
          splendor.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Arriving by Air"
        image="../images/transportation_air.png"
        cta={{ label: "Flight Info", link: "#" }}
        reverse
      >
        <p>
          Touch down at Taniti’s friendly airport, your gateway to island
          paradise. Serving small jets and propeller planes, our airport is the
          first step in your Taniti adventure. With plans to accommodate larger
          jets soon, we’re making it even easier to visit our shores.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Explore with Ease"
        image="../images/transportation_explore.png"
      >
        <p>
          Navigate Taniti City and beyond with a variety of ground
          transportation options. Hop on a public bus, hail a taxi, or rent a
          bike or car for personal exploration. Taniti is yours to discover,
          from its walkable city streets to the scenic routes that crisscross
          the island.
        </p>
      </FeatureBlock>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center blue-bg py-3 "
      >
        <h2 className="text-light">Ways To Get Around</h2>
      </Container>
      <Container className="pt-5">
        <Row id="transportation">
          {transportationData.map((transportation, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <DisplayCard
                category={transportation.category}
                name={transportation.name}
                description={transportation.description}
                atmosphere={transportation.atmosphere}
                specialFeatures={transportation.specialFeatures}
                image={transportation.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Slideshow slides={slides} />
    </Container>
  );
};

export default Transportation;
