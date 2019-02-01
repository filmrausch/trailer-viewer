import React, { Fragment } from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Playlist from './components/Playlist'
import links from './links.json'
import { IVideo } from './interfaces/video'

const App = () => (
  <Fragment>
    <Header />
    <Playlist videos={links as IVideo[]} />
  </Fragment>
)

render(<App />, document.getElementById('root'))
