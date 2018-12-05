import React from 'react'

import Pane from '../components/Pane'

export interface Props {
  columns: number
  rows: number
  sounds: Array<string>
}

export default class Tile extends React.Component<Props> {
  render() {
    const { columns, rows, sounds } = this.props

    const style = {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr '.repeat(columns),
      gridTemplateRows: '1fr '.repeat(rows)
    }

    const panes = []
    for (let i = 0; i < columns * rows; i++) {
      panes.push(<Pane sound={sounds[i]} key={i} />)
    }

    return <div style={style}>{panes}</div>
  }
}
