import "./App.css";
import "./styles.css";

import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather />
        <hr />
        <Footer />
      </div>
    </div>
  );
}
