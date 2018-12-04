import React from 'react'

export interface Props {}

interface State {
  isClicked: boolean
}

export default class Pane extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      isClicked: false
    }
  }

  render() {
    const { isClicked } = this.state

    const style = {
      // border: 'solid 1px white',
      backgroundColor: isClicked ? 'white' : 'black',
      transition: 'all ease',
      transitionDuration: isClicked ? '0s' : '300ms'
    }

    if (isClicked) {
      setTimeout(() => {
        this.setState(() => ({
          isClicked: false
        }))
      }, 1)
    }

    const handlers =
      'ontouchstart' in window
        ? { onTouchStart: this.handleClick }
        : { onMouseDown: this.handleClick }

    return <div style={style} {...handlers} />
  }

  handleClick = () => {
    this.setState(() => ({
      isClicked: true
    }))
  }
}
