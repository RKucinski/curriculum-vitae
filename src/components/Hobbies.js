  import React, { Component } from 'react'
import '../App.css';
import { ListGroup, ListGroupItem } from 'reactstrap';


class Hobbies extends Component {
  render() {
    return (
      <div>
        <ListGroup className="skillsList">
        <h3 style={{fontFamily:"'office', sans-serif", textAlign:"center"}}>{this.props.data.hobbies.title}</h3>
          <ListGroupItem>
            {this.props.data.hobbies.hobbies}
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default Hobbies