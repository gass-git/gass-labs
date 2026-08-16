import { BrowserRouter } from "react-router";
import * as C from "./components";
import "./App.css";
import closingFrame from "./assets/closing-frame.png";
import topShadow from "./assets/top-shadow.png";
import banner from "./assets/example-banner.png";

function App() {
  return (
    <BrowserRouter basename="">
      <div className="top-bar">
        <div>
          <C.Brand />
        </div>
        <div>
          <C.Nav />
        </div>
      </div>

      {/* TODO: expand when clicking on top right menu icon (small screens) */}
      <div className="nav-drawer">
        <C.NavDrawer />
      </div>

      <div className="page-body">
        <div className="banner">
          <img src={banner} />
        </div>

        <div>
          <img src={topShadow} />
        </div>

        <div className="content-slot">
          <C.Content />
        </div>

        <div className="page-body-close">
          <img src={closingFrame} />
        </div>
      </div>

      <div className="footer-slot">
        <C.Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
