import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="nav">
      <div className="left-div">
        <Link to="/">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://tse4.mm.bing.net/th?id=OIP.1MU6EvsUvqTdtjYFAwbDrgHaHa&pid=Api&P=0&h=220"
          width="20"
          height="30"
          alt="search-icon"
        />
        <input placeholder="Search" />

        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://www.pngkey.com/png/detail/115-1150420_avatar-png-pic-male-avatar-icon-png.png"
                width="30"
                height="30"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://www.pngkey.com/png/detail/115-1150420_avatar-png-pic-male-avatar-icon-png.png"
                width="30"
                height="30"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="https://www.pngkey.com/png/detail/115-1150420_avatar-png-pic-male-avatar-icon-png.png"
            width="30"
            height="30"
            alt="user-dp"
            id="user-dp"
          />
          <span>John Doe</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/logout">Log out</Link>
            </li>
            <li>
              <Link to="/signup">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
