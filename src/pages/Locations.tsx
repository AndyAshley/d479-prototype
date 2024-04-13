import { Container } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";
import Slideshow, { SlideshowData } from "../components/Slideshow/Slideshow";

const Locations = () => {
  const slides: SlideshowData[] = [
    {
      image: "locations-slide-1.png",
      heading: "Signature Landscapes",
      text: "Discover the natural beauty of Taniti with our guided tours of the island's most iconic landscapes. From the lush rainforests to the crystal-clear waters, Taniti is a paradise waiting to be explored.",
    },
    {
      image: "locations-slide-2.png",
      heading: "Hidden Gems",
      text: "Explore the hidden gems of Taniti with our guided tours of the island's best-kept secrets. From secluded beaches to hidden waterfalls, Taniti is full of surprises waiting to be uncovered.",
    },
    {
      image: "locations-slide-3.png",
      heading: "Guided Tours",
      text: "Embark on a guided tour of Taniti with our experienced guides. Whether you're looking for adventure or relaxation, our tours are designed to give you an unforgettable experience of our island's beauty.",
    },
  ];

  return (
    <Container fluid className="pt-5 px-0">
      <Container className="pb-5">
        <h2>Discover Our Signature Landscapes and Landmarks</h2>
        <p>
          Venture beyond the beaches to uncover the true essence of Taniti. From
          the bustling streets of Taniti City, adorned with native architecture,
          to the serene scenery surrounding Yellow Leaf Bay, every corner of
          Taniti tells a story. Embark on scenic boat or bus tours, wander
          through ancient rainforests, or marvel at the might of our active
          volcano. Each experience is a chapter in your Taniti adventure,
          waiting to be explored. Dive into the guide below to see what
          unforgettable sights make Taniti a world of its own.
        </p>
      </Container>
      <FeatureBlock
        title="Island Tours"
        image="../images/locations-boat-tours.png"
      >
        <p>
          Discover Taniti in all its diversity through our guided boat or bus
          tours. Each journey offers a unique perspective of the island, from
          its lush landscapes and hidden gems to its vibrant communities.
          Whether you're seeking adventure or tranquility, our tours are
          designed to give you a comprehensive experience of Taniti’s beauty.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Explore Taniti City"
        image="../images/locations-city.png"
        reverse
      >
        <p>
          The heart of our island, Taniti City, welcomes you with its unique
          blend of native architecture and the natural beauty of white, sandy
          beaches along Yellow Leaf Bay. Wander through our lively streets, soak
          in the culture and history, and relax on the beaches that are just a
          stone's throw away from the bustling city life.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Volcano Visits"
        image="../images/locations-volcano.png"
      >
        <p>
          Stand in awe of Taniti’s active volcano, a testament to the island's
          vibrant natural forces. Safely visit this majestic natural wonder,
          where you can learn about its geological significance and enjoy
          panoramic views that are simply unforgettable. A visit to the volcano
          is a journey to the power and beauty of nature itself.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Rainforest Adventures"
        image="../images/locations-rainforest.png"
        reverse
      >
        <p>
          Immerse yourself in the verdant wonder of Taniti's rainforests with
          guided hikes that reveal the secrets of this lush paradise. Encounter
          exotic flora and fauna, uncover hidden waterfalls, and feel the
          serenity of nature enveloping you. It's an adventure that connects you
          deeply with the natural world.
        </p>
      </FeatureBlock>
      <Slideshow slides={slides} />
    </Container>
  );
};

export default Locations;
