import React, { Component } from 'react'
import '../App.css';
import MyCard from './Card'

class Exp extends Component {
  render() {
    return (
      <div>
        <h3 style={{fontFamily:"'office', sans-serif", textAlign:"center"}}>{this.props.data.experiences.title}</h3>
        {this.props.data.experiences.exp.map(item => <MyCard header={item.header} title={item.title} text={item.text} />)}
      </div>
    )
  }
}

export default Exp