import React from 'react'

export default class Pane extends React.PureComponent {
  render() {
    const style = {
      backgroundColor: 'black',
      border: 'solid 1px white'
    }

    return <div style={style} />
  }
}
