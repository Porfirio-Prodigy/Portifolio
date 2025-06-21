import InfoCard from "../components/InfoCard/Index";
import MouseFollower from "../components/MouseFollower/Index";
import Skills from "../components/Skills/Index";
import Projects from "../components/Projects/Index";

const Home = () => {
  return (
    <div className="main-container">
      <main>
          <MouseFollower />
          <InfoCard />
          <Skills />
          <Projects />
      </main>
    </div>
  );
};

export default Home;
