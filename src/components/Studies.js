import React, { Component } from 'react'
import '../App.css';
// import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import MyCard from './Card'
import '../App.css'


class Studies extends Component {

  render() {
    return (
      <div>
        <h3 style={{fontFamily:"'office', sans-serif", textAlign:"center"}}>{this.props.data.studies.title}</h3>
        {this.props.data.studies.etude.map(item => <MyCard title={item.title} text={item.text} />)}
      </div>
    )
  }
}

export default Studies