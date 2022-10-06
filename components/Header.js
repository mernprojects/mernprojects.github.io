import Link from "next/link";


export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">MERN Projects</a>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link href="/">
                <a className="nav-link">
                  <li className="nav-item">Home</li>
                </a>
              </Link>
              <Link href="/collections/">
                <a className="nav-link">
                  <li className="nav-item">Collections</li>
                </a>
              </Link>
              <Link href="/about/">
                <a className="nav-link">
                  <li className="nav-item">About</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
