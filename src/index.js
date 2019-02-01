import React, { Fragment } from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Playlist from './components/Playlist'
import links from './links.json'

const App = () => (
  <Fragment>
    <Header />
    <Playlist videos={links} />
  </Fragment>
)

render(<App />, document.getElementById('root'))
