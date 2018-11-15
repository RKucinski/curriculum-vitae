import React, { Component } from 'react'
import photo from '../photo.png'
import '../App.css';


class HeadCV extends Component {
  render () {
    return (
      <div className="headCV">
        <img className="avatar" src={photo} alt="Roman Kucinski"></img>
        <h1>{this.props.data.name}</h1>
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.story}</p>
      </div>
    )
  }
}

export default HeadCV