import hero from "../assets/superHero.webp";

const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="super Hero" id="heros" />;
    </div>
  );
};

export default Hero;
