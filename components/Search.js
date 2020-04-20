import React from 'react'

import { IoIosSearch } from "react-icons/io"

const Search = () => {
  return(
    <div>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn" type="submit"><IoIosSearch /></button>
      </form>
    </div>
  )
}
export default Search
