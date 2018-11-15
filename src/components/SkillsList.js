import React, { Component } from 'react'
import { ListGroup } from 'reactstrap';
import '../App.css';
import Skill from './Skill'


class Skills extends Component {
  render() {
    return (
      <div>
        <h3 style={{fontFamily:"'office', sans-serif", textAlign:"center"}}>{this.props.data.skills.title}</h3>
        <ListGroup className="skillsList">
          {this.props.data.skills.skills.map(item => <Skill title={item.title} text={item.skill} />)}
        </ListGroup>
      </div>
    )
  }
}

export default Skills