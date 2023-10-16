function NavBar() {
  return (
    <nav className="nav">
      <div className="left-div">
        <img
          src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          alt="logo"
        />
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
            <li>Log in</li>
            <li>Log out</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
