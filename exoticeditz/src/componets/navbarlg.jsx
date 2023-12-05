function Navbarlg() {
  return (
    <nav className="font-sans flex flex-col  sm:flex-row sm:text-left sm:justify-between px-6 bg-stone-950 shadow sm:items-baseline w-full border border-stone-900 border-t-0 border-r-0 border-l-0">
      <div className="sm:mb-0" id="nav-logo">
        <br />
        <br />
        <img src="./logo-exotic.png" alt="" style={{ maxWidth: "30%" }} />
      </div>
      <div>
        <a
          href="#"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          One
        </a>
      </div>
    </nav>
  );
}

export default Navbarlg;
