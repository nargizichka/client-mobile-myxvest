import Features from "../components/Features";
import Services from "../components/Services";
import Menu from "../components/Menu";

const Home = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="mOm">
      <div className="block first">
        {!token ? <Features /> : null}
        <Services />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
