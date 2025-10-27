import MainCarousel from "../components/MainCarousel";
import GenreCarousel from "../components/GenreCarousel";
import ManualCarousel from "../components/ManualCarousel";
import FeaturedGameCards from "../components/FeaturedGameCards";
import psExclusives from "../data/psExclusives";
import "./Home.css";

const Home = () => (
  <div className="home-container">
    <MainCarousel />
    <ManualCarousel title="PlayStation Exclusives" games={psExclusives} />
    <FeaturedGameCards games={psExclusives} />
    <GenreCarousel genre="action" title="Action Games" />
    <GenreCarousel genre="shooter" title="Shooter Games" />
    <GenreCarousel genre="adventure" title="Adventure Games" />
  </div>
);

export default Home;
