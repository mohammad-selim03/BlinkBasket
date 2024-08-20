import "./App.css";
import BannerCategories from "./ui/BannerCategories";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeBanner from "./ui/HomeBanner";
import Hightlights from "./ui/Hightlights";
import Categories from "./ui/Categories";
import ProductList from "./ui/ProductList";
import DiscountedBanner from "./ui/DiscountedBanner";
import Blog from "./ui/Blog";

function App() {
  return (
    <>
      <main>
        <BannerCategories />
        <HomeBanner />
        <Hightlights />
        <Categories />
        {/* Product list */}
        <ProductList />
        {/* Discounted Banner */}
        <DiscountedBanner />
        {/* Blog */}
        <Blog />
      </main>
    </>
  );
}

export default App;
