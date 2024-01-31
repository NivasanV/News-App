
const Navbar = ({ setCategory , setCountry}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News Now</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Country
              </a>
              <ul className="dropdown-menu">
                <li><div className="dropdown-item" onClick={() => setCountry("jp")}>Japan</div></li>
                <li><div className="dropdown-item" onClick={() => setCountry("cn")}>China</div></li>
                <li><div className="dropdown-item" onClick={() => setCountry("ca")}>Canada</div></li>
                <li><div className="dropdown-item" onClick={() => setCountry("in")}>India</div></li>
                <li><div className="dropdown-item" onClick={() => setCountry("de")}>Germany</div></li>
                <li><div className="dropdown-item" onClick={() => setCountry("us")}>USA</div></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar