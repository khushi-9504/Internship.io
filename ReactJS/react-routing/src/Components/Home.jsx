import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleAboutClick() {
    console.log("About button clicked");
    navigate("/about");
  }

  function handleServicesClick() {
    console.log("About button clicked");
    navigate("/services");
  }

  function handleContactUsClick() {
    console.log("About button clicked");
    navigate("/contact");
  }

  return (
    <div>
      <h2>Home Component</h2>
      <div
        className="button-container"
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={handleAboutClick}>Click to go on About page</button>
        <button onClick={handleServicesClick}>
          Click to go on Services page
        </button>
        <button onClick={handleContactUsClick}>
          Click to go on Contact Us page
        </button>
      </div>
    </div>
  );
};

export default Home;
