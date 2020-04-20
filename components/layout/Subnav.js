import React, { useState} from 'react'

const Subnav = () => {


  return (

    <div className="subnav container-nav">
      <ul className="subnav-nav float-left">
        <li className="subnav-link left-active">
          My feed
        </li>
        <li className="subnav-link" onClick={() => toggle(this)}>
          Tags
        </li>

      </ul>
      <ul className="subnav-nav-right float-right">
        <li className="subnav-link" >
          My Activity
        </li>
        <li className="subnav-link right-active dropdown">
          <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </div>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Subnav
