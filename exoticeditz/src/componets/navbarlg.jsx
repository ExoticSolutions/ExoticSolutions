function Navbarlg() {
  return (
    <nav className="font-sans text-center border border-stone-900 border-t-0 border-r-0 border-l-0 rounded-md">
      <div className="columns-2 ">
        <div>
          <img
            src="./logo-exotic.png"
            alt=""
            style={{ maxWidth: "50%" }}
            className=""
          />
        </div>
        <div className="py-20 hover:text-stone-950">
          <a
            href="https://linktr.ee/1ExoticSolutions"
            className="no-underline "
            id="style-contact"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbarlg;
