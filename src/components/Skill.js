import React, { Component } from 'react'
import { ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import '../App.css'



class Skill extends Component {
  render() {
    return (
      <div>
        <ListGroupItem>
          <ListGroupItemHeading><b>{this.props.title}</b></ListGroupItemHeading>
          {this.props.text}
        </ListGroupItem>
      </div>
    )
  }
}

export default Skill