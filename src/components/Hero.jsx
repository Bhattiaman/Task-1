const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Aman Bhatti</h1>
        <p>
          
I am a computer science engineering student at Chandigarh University, who is always excited to face new challenges and meet other people, make new connections, and learn more and more from others' experiences and failures.

        </p>

        <div className="hero-btn">
          <button>React js</button>
          <button className="secondary-btn">Now</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img className="herr" src="/images/linkedIn.jpeg" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
