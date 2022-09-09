import { Hero, Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="prose max-w-none">
      <Hero>
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h1>Next.js SPA ♨</h1>
            <p>A static-exported Next.js app with react-router-dom</p>
            <Button color="primary" onClick={() => navigate("/about")}>
              Why?
            </Button>
          </div>
        </Hero.Content>
      </Hero>
    </div>
  );
};

export default Home;
