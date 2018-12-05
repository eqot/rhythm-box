import React from 'react'
import { Howl } from 'howler'

export interface Props {
  sound: string
}

interface State {
  isClicked: boolean
}

export default class Pane extends React.Component<Props, State> {
  sound: any

  constructor(props: any) {
    super(props)

    this.state = {
      isClicked: false
    }

    this.sound = new Howl({
      src: this.props.sound
    })
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
    this.sound.play()

    this.setState(() => ({
      isClicked: true
    }))
  }
}
