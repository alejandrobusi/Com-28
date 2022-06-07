import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css'

function Header() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-color ${styles.bgColor}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/home' className='nav-link'>Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header