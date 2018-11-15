import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import '../App.css'



class MyCard extends Component {

  removeSurplus = () => (this.props.header) ? <CardHeader>{this.props.header}</CardHeader> : null

  render() {
    return (
      <div>
        <Card className="expCard">
          {this.removeSurplus()}
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.text}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default MyCard