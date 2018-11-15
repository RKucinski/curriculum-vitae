import React, { Component } from 'react'
import HeadCV from './HeadCV';
import SkillsList from './SkillsList';
import Exp from './Exp';
import Hobbies from './Hobbies';
import Studies from './Studies';
import Contact from './Contact';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';


class Curriculum extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col> <HeadCV {...this.props} /> </Col>
          </Row>
          <Row>
            <Col sm="12" md="8" > <Exp {...this.props} /> </Col>
            <Col sm="12" md="4" > <SkillsList {...this.props} /> </Col>
          </Row>
          <Row>
            <Col sm="12" md="8" > <Studies {...this.props} /> </Col>
            <Col sm="12" md="4" >  <Hobbies {...this.props} /> </Col>
          </Row>
          <Row>
            <Col><Contact {...this.props} /></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Curriculum