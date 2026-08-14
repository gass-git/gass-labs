import { BrowserRouter } from "react-router";
import * as C from "./components";
import "./App.css";
import closingFrame from "./assets/closing-frame.png";

function App() {
  return (
    <BrowserRouter basename="">
      <div className="top-bar">
        <div>
          <C.Brand />
        </div>
        <div></div>
        <div>
          <C.Nav />
        </div>
      </div>

      {/* expand when clicking on top right menu icon (small screens) */}
      <div className="row nav-drawer">
        <C.NavDrawer />
      </div>

      <div className="wrapper">
        <div className="row banner-wrapper">
          <C.Banner />
        </div>

        <div className="row content">
          <C.Content />
        </div>

        <div className="row">
          <img src={closingFrame} />
        </div>
      </div>

      <div className="footer-wrapper">
        <C.Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
