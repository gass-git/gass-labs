import lab_flask from "../assets/lab_flask.png";

export default function Brand() {
  return (
    <>
      <div className="row">
        <div
          className="row"
          style={{ paddingTop: "6px", border: "0px solid white" }}
        >
          <img src={lab_flask} style={{ height: "52px" }} />
        </div>
        <div
          className="row"
          style={{ marginLeft: "10px", border: "0px solid white" }}
        >
          <h1>Gass Labs</h1>
        </div>
      </div>
    </>
  );
}
