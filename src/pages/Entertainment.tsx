import { Container } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";
import Slideshow, { SlideshowData } from "../components/Slideshow/Slideshow";

const Entertainment = () => {
  const slides: SlideshowData[] = [
    {
      image: "entertainment-slide-1.png",
      heading: "Golf",
      text: "Coming soon to Taniti: a world-class golf course that will challenge and delight golfers of all levels. Stay tuned for more details!",
    },
    {
      image: "entertainment-slide-2.png",
      heading: "Local Music",
      text: "Taniti's music scene is as diverse as its landscapes. From traditional drum circles to modern pop concerts, there's always something to see and hear. Join us for a night of music and dancing under the stars.",
    },
    {
      image: "entertainment-slide-3.png",
      heading: "Dance Clubs",
      text: "Get your groove on at Taniti's hottest dance clubs. With live DJs, themed nights, and plenty of room to move, you'll be dancing until dawn.",
    },
  ];

  return (
    <Container fluid className="pt-5 px-0">
      <Container className="pb-5">
        <h2>Uncover Taniti's Adventures and Nightlife</h2>
        <p>
          Taniti isn't just a paradise of natural beauty; it's also brimming
          with activities that cater to every interest. From the thrill of
          zip-lining through the rainforest to serene evenings at our local
          pubs, there's no end to the entertainment. Immerse yourself in our
          cultural offerings at museums, dive into the vibrant marine life with
          snorkeling expeditions, or enjoy a laid-back round of golf on our
          upcoming course. Explore below for Taniti's top entertainment picks,
          ensuring your days and nights are full of unforgettable experiences.
        </p>
      </Container>
      <FeatureBlock
        title="Underwater Wonders"
        image="../images/entertainment-underwater.png"
      >
        <p>
          Dive into Taniti’s crystal-clear waters for a snorkeling adventure.
          Discover colorful coral reefs, vibrant marine life, and underwater
          landscapes that make Taniti a snorkeler's paradise. Whether you're a
          beginner or an experienced diver, the ocean's wonders await.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Thrill in the Canopy"
        image="../images/entertainment-canopy.png"
        reverse
      >
        <p>
          Elevate your Taniti adventure with an exhilarating zip-lining
          experience through our lush rainforests. Glide above the canopy, where
          stunning views and the calls of exotic birds await. It’s an
          unforgettable way to see the island from a different perspective.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Taniti Nightlife"
        image="../images/entertainment-nightlife.png"
      >
        <p>
          When the sun sets, Taniti comes alive with vibrant nightlife. From
          cozy pubs where you can sample local brews to dance clubs where you
          can party until dawn, there’s a spot for every mood. Join us to
          unwind, celebrate, and dance the night away.
        </p>
      </FeatureBlock>

      <FeatureBlock
        title="Journey Through History"
        image="../images/entertainment-history.png"
        reverse
      >
        <p>
          Step into the past at Taniti's Local History Museum. Engage with
          exhibits that tell the story of our island, from ancient cultures to
          present day. It’s a fascinating exploration for history buffs and
          curious minds looking to understand the heart and soul of Taniti.
        </p>
      </FeatureBlock>
      <Slideshow slides={slides} />
    </Container>
  );
};

export default Entertainment;
