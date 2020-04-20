import React from 'react'
import { FiEye } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

const Feed = ({tag, title, img, name, date, views, text, tags}) => {


  return(

    <div className="justify-content-md-center single-feed">
      <div className="col-lg-7 col-md-8 col-sm-12 mr-auto ml-auto">
        <div className="row header">
          <div className="tag">
            {tag}
          </div>
          <div className="title">
            {title}
          </div>
        </div>
        <div className="row user-information">
          <div className="col-lg-8 col-sm-9 float-left user p-0">
              <div className="user-image">
                <img src={img} alt=""/>
              </div>
              <div className="user-name">
                <p>{name} <span> - {date}</span></p>
              </div>
          </div>
          <div className="col-lg-4 col-sm-3 float-right subscription p-0">
            <div className="views">
              <p><FiEye/> {views}</p>

            </div>
            <button className="btn-subscribe" type="submit"><FaRegBell />Subscribe</button>
          </div>
        </div>
        <div className="row feed-content">
          <div className="feed-description">
            <p>
              {text}
            </p>
          </div>
          <div className="tags-area">
            {tags.map((tag, i) =>
              (<button key={i} className="btn-tag" type="submit">{tag}</button>)
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
