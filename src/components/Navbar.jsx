import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
   <>
    <nav className="navbar navbar-expand-lg bg-dark   navbar-dark fixed-top">
          <div className="container-fluid">
            
            {/* Brand left mein */}
            <a className="navbar-brand text-white fw-bold" href="/" > {props.title}
            </a>

            {/* Toggle button for mobile */}
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="/navbarContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Center Links + Right Search */}
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">   {/* mx-auto = center */}
                <li className="nav-item">
                  <a className="nav-link text-white active fw-camel" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fw-camel" href="/about">{props.aboutText}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fw-camel" href="/contact">Contact</a>
                </li>
              </ul>

              {/* Search form right side pe */}
              <form className="d-flex">
                <input 
                  className="form-control me-2" 
                  type="search" 
                  placeholder="Search" 
                />
                <button className="btn btn-outline-light" type="submit">
                  Search 
                </button>
              </form>
            </div>
          </div>
        </nav>

        {/* Yeh padding fix karega taake content navbar ke neeche se shuru ho */}
        <div style={{ paddingTop: '80px' }}>
          <div className="container mt-5">
            {/* <h1 className="text-center">Welcome to Home Page</h1>
            <p className="text-center">Ab navbar fixed hai aur center mein bhi!</p> */}
          </div>
        </div>
   </>
  )
}

 Navbar.propTypes = { title: PropTypes.string,
     aboutText: PropTypes.string }
// Navbar.defaultProps = { title: "Set Title Here",
//      aboutText: "About Text Here" }
 