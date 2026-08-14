import { BrowserRouter } from "react-router";
import * as C from "./components";
import "./App.css";
import topShadow from "./assets/top-shadow.png";

function App() {
  return (
    <BrowserRouter basename="">
      <div className="site-wrapper">
        <div className="top-bar">
          <div className="brand-wrapper">
            <C.Brand />
          </div>
          <div></div>
          <div className="col nav-wrapper">
            <C.Nav />
          </div>
        </div>

        {/* expand when clicking on top right menu icon (small screens) */}
        <div className="row nav-drawer">
          <C.NavDrawer />
        </div>

        <div className="row banner-wrapper">
          <C.Banner />
        </div>

        <div className="row section-title-wrapper">
          <C.SectionTitle />
        </div>

        <div className="row content">
          <C.Content />
        </div>
        <div className="row footer">
          <C.Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
