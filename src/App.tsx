import * as C from "./components";

function App() {
  return (
    <>
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

      <div className="row content">CONTENT</div>
      <div className="row footer">FOOTER</div>
    </>
  );
}

export default App;
