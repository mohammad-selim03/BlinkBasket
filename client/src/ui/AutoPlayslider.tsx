import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import { banner1, banner2, banner3 } from "../assets";

const AutoPlayslider = () => {
  return (
    <>
      {/* <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div data-src={banner1} />
      <div data-src={banner2} />
      <div data-src={banner3} />
    </AutoplaySlider> */}

      <AwesomeSlider
        animation="foldOutAnimation"
        cssModule={[CoreStyles, AnimationStyles]}
      >
        <div data-src={banner1} />
        {/* <div data-src={banner2} /> */}
        {/* <div data-src={banner3} /> */}
      </AwesomeSlider>
    </>
  );
};

export default AutoPlayslider;
