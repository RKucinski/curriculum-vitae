import React, { Component } from 'react'
import '../App.css';
import LinkedIn from '../linkedin_logo.png'
import github from '../github.png'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h3 style={{ fontFamily: "'office', sans-serif", textAlign: "center" }}>Contact</h3>
        <div className="contactImg">
          <a href="https://www.linkedin.com/in/romankucinski/" target='blank'><img src={LinkedIn} alt="contact me"/></a>
          <a href="https://github.com/RKucinski" target='blank'><img src={github} alt="contact me"/></a>
        </div>
      </div>
    )
  }
}

export default Contact