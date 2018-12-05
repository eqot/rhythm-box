import React from 'react'

import Tile from './containers/Tile'

const SOUNDS = ['tom1.mp3', 'cymbal.mp3', 'tom2.mp3', 'tom3.mp3'].map(
  file => `./sounds/${file}`
)

export default class App extends React.Component {
  render() {
    return <Tile columns={2} rows={2} sounds={SOUNDS} />
  }
}
