import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About GameHub</h1>
        <p className="about-description">
          Astro is a portfolio project built to demonstrate modern front-end
          development skills, including responsive design, component
          architecture, and API integration. This mock online game store
          features PlayStation games and genres, but is not affiliated with
          Sony, PlayStation, or any of the featured game publishers.
        </p>
        <p className="about-description">
          All game data is fetched from the{" "}
          <strong>RAWG Video Games Database API</strong>, a powerful open API
          for accessing information about video games across platforms. This
          site is for demonstration purposes only.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
