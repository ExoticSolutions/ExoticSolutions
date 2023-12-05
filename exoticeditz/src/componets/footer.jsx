import "../index.css";
function Footer() {
  return (
    <div>
      <img
        src="./ima.png"
        alt=""
        style={{ maxWidth: "10%" }}
        className="mt-20 py-20"
      />

      <div
        className="border border-stone-900 border-b-0 border-r-0 border-l-0"
        id="footer-border"
      >
        <div className="grid grid-cols-2">
          <div>
            <img src="./logo-exotic.png" alt="" style={{ maxWidth: "40%" }} />
          </div>
          <div className="text-white mt-10 py-3 px-10" id="style-foot-link">
            <center>
              <a href="https://linktr.ee/1ExoticSolutions">
                linktr.ee/1ExoticSolutions
              </a>
            </center>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
