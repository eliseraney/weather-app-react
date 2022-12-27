import "./styles.css";
import Search from "./Search";
import Condition from "./Condition";
import Temperature from "./Temperature";
import WindSpeed from "./WindSpeed";
import Humidity from "./Humidity";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Condition />
      <h1>Denver</h1>
      <Temperature />
      <WindSpeed />
      <Humidity />
      <hr />
      <Footer />
    </div>
  );
}
