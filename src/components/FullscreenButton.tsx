import React from 'react'
const screenfull = require('screenfull')

export default class FullscreenButton extends React.Component {
  componentDidMount() {
    screenfull.onchange(() => {
      this.forceUpdate()
    })
  }

  render() {
    if (screenfull.isFullscreen) {
      return null
    }

    return (
      <button
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          fontSize: 20
        }}
        onClick={this.handleClick}
      >
        Fullscreen
      </button>
    )
  }

  handleClick = () => {
    if (screenfull.enabled) {
      screenfull.request()
    }
  }
}
