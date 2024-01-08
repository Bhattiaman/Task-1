import "../components/navi.css";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img className="log" src="/images/logo1.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="bt btw">login</button>
    </nav>
  );
};

export default Navigation;
