import "./App.css";
import "./styles.css";

import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Tokyo" />
        <hr />
        <Footer />
      </div>
    </div>
  );
}
