import { Hero } from "react-daisyui";

const Home = () => {
  return (
    <div className="prose max-w-none">
      <Hero>
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h1>Next.js SPA ♨</h1>
            <p>A static-exported Next.js app with react-router-dom</p>
          </div>
        </Hero.Content>
      </Hero>
    </div>
  );
};

export default Home;
