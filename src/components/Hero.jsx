import "../components/hero.css";
const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Aman Bhatti B.Tech</h1>
        <p>
          
I am a computer science engineering student at Chandigarh University, who is always excited to face new challenges and meet other people, make new connections, and learn more and more from others' experiences and failures.

        </p>

        <div className="hero-btn">
          <button className="bt">React js</button>
          <button className="secondary-btn  bt">Now</button>
        </div>

        <div className="shopping">
          <p></p>

        </div>
      </div>
      <div className="hero-image">
        <img className="herr" src="/images/linkedIn.jpeg" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
