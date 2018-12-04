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

    return <div style={style} onClick={this.handleClick} />
  }

  handleClick = () => {
    this.setState(() => ({
      isClicked: true
    }))
  }
}
