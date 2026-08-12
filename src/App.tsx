import "./App.css";
import * as C from "./components";

function App() {
  return (
    <>
      <div className="row top-bar">
        <div className="col brand">
          <C.Brand />
        </div>
        <div></div>
        <div className="col menu">menu</div>
      </div>

      <div className="row top-image">TOP IMAGE</div>

      <div className="row content">CONTENT</div>
      <div className="row footer">FOOTER</div>
    </>
  );
}

export default App;
