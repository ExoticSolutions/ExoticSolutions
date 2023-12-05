import "./App.css";
import Mainpagecontent from "./componets/mainpagecontent";
import Navbarlg from "./componets/navbarlg";
import Navbarsm from "./componets/navbarsm";
import Footer from "./componets/footer";
import Mainsm from "./componets/mainsm";
import Footersm from "./componets/footersm";
function App() {
  return (
    <>
      <div id="lg-content" className="">
        <div className="grid grid-rows-1">
          <div className="mb-20">
            <Navbarlg />
          </div>
        </div>
        <div className="grid grid-rows-1">
          <div id="img-load">
            <Mainpagecontent />
          </div>
          <center className="floating">
            <img
              src="./tail.svg"
              alt=""
              style={{ maxWidth: "20%" }}
              className="mt-28 me-20"
            />
          </center>
        </div>
        <div className="grid grid-rows-1">
          <br />
          <br />

          <Footer />
        </div>
      </div>
      <div id="sm-content">
        <div>
          <Navbarsm />
        </div>
        <div className="grid grid-rows-1">
          <div>
            <Mainsm />
            <br />
            <div>
              <Footersm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
