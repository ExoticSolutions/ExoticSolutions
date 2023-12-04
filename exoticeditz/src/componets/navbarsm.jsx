import "../index.css";
function Navbarsm() {
  return (
    <div className="font-sans text-center bg-stone-950 shadow border border-stone-900 border-t-0 border-r-0 border-l-0">
      <div className="columns-2 ">
        <div>
          <img src="./logo-exotic.png" alt="" style={{ maxWidth: "100%" }} />
        </div>
        <div className="py-10" id="style-contact">
          <a href="https://linktr.ee/1ExoticSolutions" className="no-underline">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbarsm;
