import React from 'react'
import Link from 'next/Link'

import Search from '../Search'






const Navbar = () => {


  return(
    <nav className="navbar navbar-expand-lg navbar-dark container-nav">
      <Link href="/">
        <a className="navbar-brand">liferay feed app</a>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link href="/trending-topics">
              <a className="nav-link" >Trending topics
                <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/groups">
              <a className="nav-link">Groups</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/accessibility">
              <a className="nav-link">Accessibility</a>
            </Link>
          </li>
        </ul>
          <Search />
      </div>
    </nav>
  )
}

export default Navbar
