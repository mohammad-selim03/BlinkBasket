import "./App.css";
import BannerCategories from "./ui/BannerCategories";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeBanner from "./ui/HomeBanner";
import Hightlights from "./ui/Hightlights";

function App() {
  return (
    <>
      <main>
          <BannerCategories />
          <HomeBanner />
          <Hightlights />
      </main>
    </>
  );
}

export default App;
