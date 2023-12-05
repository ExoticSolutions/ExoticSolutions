import "../index.css";
function Mainpagecontent() {
  return (
    <div className=" floating">
      <br />
      <div className="ms-10 rows-1 mt-36">
        <div className="grid grid-cols-2">
          <div className="me-36">
            <h1 id="style-text">
              Simple, unique and great looking, website interface designer at a
              low cost and at fast production timeframe.
            </h1>
          </div>
          <div>
            <div className="columns-4 text-center">
              <img
                src="./react-bootstrap.png"
                alt=""
                style={{ maxWidth: "50%" }}
              />
              <img
                src="./Unofficial_JavaScript_logo_2.svg.png"
                alt=""
                className="w-36"
                style={{ maxWidth: "50%" }}
              />
              <img
                src="./vite.svg"
                alt=""
                className="w-36"
                style={{ maxWidth: "50%" }}
              />
              <img
                src="./profile.png"
                alt=""
                style={{ maxWidth: "50%" }}
                className=""
              />
            </div>
            <div className="columns-4 text-center mt-20">
              <img
                src="./HTML5_Badge.svg.png"
                alt=""
                style={{ maxWidth: "50%" }}
              />
              <img
                src="./java.svg"
                alt=""
                className="w-36"
                style={{ maxWidth: "50%" }}
              />
              <img
                src="./w3_css-icon.svg"
                alt=""
                className="w-36"
                style={{ maxWidth: "50%" }}
              />
              <img
                src="./React-icon.svg.png"
                alt=""
                className="w-36"
                style={{ maxWidth: "50%" }}
              />
            </div>
          </div>
          <div className="mt-5 flex">
            <p id="built" className="me-3">
              Built with{" "}
            </p>
            <img
              src="./tail.svg"
              alt=""
              style={{ maxWidth: "15%" }}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
20;

export default Mainpagecontent;
