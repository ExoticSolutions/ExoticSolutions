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
      <div className="">
        <div className="">
          <div id="lg-content" className="">
            <div className="splash-screen">
              <img src="./fadebg.png" className="splash-image" alt="" />
            </div>

            <div className="grid grid-rows-1">
              <div className="">
                <Navbarlg />
              </div>
            </div>
            <div className="grid grid-rows-1">
              <div id="img-load">
                <Mainpagecontent />
              </div>

              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="grid grid-rows-1">
              <div className="grid grid-cols-1">
                <div>
                  <img
                    src="./ima.png"
                    alt=""
                    style={{ maxWidth: "10%" }}
                    className=""
                  />
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <div id="sm-content">
            <div>
              <Navbarsm />
            </div>
            <div className="grid grid-rows-1">
              <div className="splash-screen">
                <img src="./fadebg.png" className="splash-image" alt="" />
              </div>
              <div>
                <Mainsm />
                <div>
                  <Footersm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
