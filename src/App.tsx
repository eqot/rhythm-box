import React from 'react'

import Tile from './containers/Tile'

export default class App extends React.Component {
  render() {
    return <Tile columns={2} rows={2} />
  }
}
