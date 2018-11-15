import React, { Component } from 'react';
import './App.css';
import Curriculum from './components/Curriculum';
import data from './components/data'

class App extends Component {

  constructor() {
    super()
    this.state = {
      french: true,
      data: data.dataFR
    }
  }

  isChecked = () => {
    this.setState({
      french: !this.state.french,
      data: this.state.french ? data.dataEN: data.dataFR
    })
  }  

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state !== nextState) return true
    return false
  }
  

  render() {
    return (
      <div className="App">
        <div className='flipflap'>
          <input class="tgl tgl-flip" id="cb5" type="checkbox" onChange={this.isChecked} />
          <label class="tgl-btn" data-tg-off="" data-tg-on="" for="cb5"></label>
        </div>  
        <Curriculum data={this.state.data} />
      </div>
    )
  }
}

export default App;
