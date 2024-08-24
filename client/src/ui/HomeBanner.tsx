import { banner1 } from "../assets";
import AutoPlayslider from "./AutoPlayslider";
import Container from "./Container";
import LinkButton from "./LinkButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const HomeBanner = () => {
  return (
    <Container className="relative py-5 -mt-5 overflow-hidden">
      <div className="relative animate__animated animate__backInDown">
        <img
          src={banner1}
          alt="homeBanner"
          className="w-full h-full object-cover "
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:-mt-40 animate__animated animate__zoomInDown">
        <h2 className="text-xl md:text-4xl lg:text-6xl text-whiteText font-bold">
          Mi Noise Cansolation Headphone
        </h2>
        <p className="text-sm md:text-xl font-semibold leading-6 text-whiteText/90 mt-4">
          The new tech gift you are wishing for right here.
        </p>
        <LinkButton className="max-w-52 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mt-12" />
      </div>
      {/* <AutoPlayslider /> */}
    </Container>
  );
};

export default HomeBanner;
