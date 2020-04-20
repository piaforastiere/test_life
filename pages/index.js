import Head from 'next/head'
import { Subnav, Feed, object } from '../components'

import "../public/styles.scss"

const Home = () => (
  <>
    <Subnav />

      <div className="feed-container container-fluid">
        {object && object.map(
          (feed, i) => <Feed {...feed} key={i}/>
        )}

      </div>

  </>
)

export default Home
