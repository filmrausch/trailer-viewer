import React, { Fragment } from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Playlist from './components/Playlist'
import links from './links.json'
import { idParser } from './util'

const videos = links.map(
  ({ name, url, special }) => ({ name, special, id: idParser(url) })
)

const App = () => (
  <Fragment>
    <Header />
    <Playlist videos={videos} />
  </Fragment>
)

render(<App />, document.getElementById('root'))
