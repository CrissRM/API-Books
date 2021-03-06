import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigate = () => {
  let activeStyle = {
    color: "#0067ff",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CERM
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/books"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/add-book"
                  className="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Add Book
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      GITHUB
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigate;
