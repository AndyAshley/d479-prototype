import { Button, Container } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";

const Home = () => {
  return (
    <Container fluid className="py-5 px-0">
      <Container>
        <h2>Discover the Hidden Gem of the Pacific</h2>
        <p>
          <b>Taniti</b> is a small, tropical island in the Pacific. While the
          island has an area of less than 500 square miles, the terrain is
          varied and includes both sandy and rocky beaches, a small but safe
          harbor, lush tropical rainforests, and a mountainous interior that
          includes a small, active volcano. Taniti has an indigenous population
          of about 20,000. Until a recent increase in tourism, most the Tanitian
          economy was dominated by fishing or agriculture.
        </p>
      </Container>
      <FeatureBlock
        title="A Taste of Taniti"
        image="../images/cuisine-home.png"
        cta={{ label: "Explore the Cuisine", link: "/cuisine" }}
      >
        <p>
          Embark on a gastronomic journey through Taniti's diverse culinary
          landscape. From the freshest seafood delicacies by the harbor to
          exotic fruits and spices grown in our fertile soils, Taniti's cuisine
          is a celebration of local flavors and traditions. Experience dining in
          quaint beachside shacks, upscale restaurants, and bustling local
          markets that promise an authentic taste of island life.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Stay in Paradise"
        image="../images/lodging-home.png"
        cta={{ label: "Book Your Stay", link: "/lodging" }}
        reverse
      >
        <p>
          Discover the perfect place to stay on Taniti, from luxury resorts to
          cozy beachside bungalows. Whether you're looking for a romantic
          getaway, a family-friendly retreat, or a solo adventure, Taniti offers
          a range of accommodations to suit every taste and budget. Wake up to
          breathtaking ocean views, relax in lush tropical gardens, and
          experience the warm hospitality of our island hosts.
        </p>
      </FeatureBlock>
      <Container fluid className="py-5 hero-bg home-cta-banner text-center">
        <h2 className="text-center text-light">Explore Taniti Today</h2>
        <p className="text-center text-light h4 mb-4">
          Plan your dream vacation to Taniti and experience the magic of the
          Pacific.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="text-light text-center"
          href="https://www.tripadvisor.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Book Now
        </Button>
      </Container>
      <FeatureBlock
        title="Experience the Island Life"
        image="../images/entertainment-home.png"
        cta={{ label: "Plan Your Adventure", link: "/entertainment" }}
      >
        <p>
          From sunrise to sunset, Taniti offers a wealth of activities and
          experiences to enjoy. Explore pristine beaches, vibrant coral reefs,
          and lush rainforests teeming with exotic wildlife. Embark on a diving
          or snorkeling adventure, hike to a hidden waterfall, or simply relax
          on the sand with a refreshing cocktail in hand. Discover the magic of
          Taniti and create memories that will last a lifetime.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Discover the Beauty of Taniti"
        image="../images/location-home.png"
        cta={{ label: "Explore the Island", link: "/locations" }}
        reverse
      >
        <p>
          Taniti is a paradise waiting to be explored, with stunning natural
          landscapes, rich cultural heritage, and warm, welcoming people. Visit
          traditional villages, historic sites, and scenic viewpoints that offer
          breathtaking views of the island. Experience the vibrant colors,
          sounds, and flavors of Taniti and immerse yourself in the beauty of
          the Pacific.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Getting to and Around Taniti"
        image="../images/transportation-home.png"
        cta={{ label: "Start Your Journey", link: "/transportation" }}
      >
        <p>
          Getting to Taniti is easy, with regular flights from major cities in
          the region. Once you arrive, you can explore the island by rental car,
          scooter, bicycle, or public transportation. Discover hidden gems off
          the beaten path, or take a guided tour to learn more about Taniti's
          history, culture, and natural wonders. However you choose to travel,
          Taniti promises an unforgettable journey.
        </p>
      </FeatureBlock>
    </Container>
  );
};

export default Home;
