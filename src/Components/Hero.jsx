import './Hero.css';

function Hero({ player }) {
  return (
    <div className="hero">
      <h1>Welcome to the {player}!</h1>
    </div>
  );
}

export default Hero;