import React, { Component } from 'react'
import { ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import '../App.css'



class Skill extends Component {
  render() {
    return (
      <div>
        <ListGroupItem>
          <ListGroupItemHeading><strong>{this.props.title}</strong></ListGroupItemHeading>
          {this.props.text}
        </ListGroupItem>
      </div>
    )
  }
}

export default Skill