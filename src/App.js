import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classnames from 'classnames'

class App extends Component {
  constructor() {
    super();

    this.state= {
        showDrawer: false
    }
    
  }
  render() {
    return (
      <div>
        <div className='cover'>
          <nav className= 'main-nav'>
          <div className= 'logo'>
            Start Bootstrap
          </div>
          <div className= 'phone'> 
            <button className='menu' onClick={() => this.setState({showDrawer: !this.state.showDrawer})}>Menu</button>
          </div>
          <div className='desktop'>
            <div>Services</div> 
            <div> Portfolio </div> 
            <div>About</div> 
            <div>Team</div> 
            <div>Contact</div>
          </div>
        </nav>
        <div className={classnames('drawer' , {open: this.state.showDrawer})}>
        <div>Services</div> 
        <br/>
        <div>Portfolio</div> 
        <br/>
        <div>About</div> 
        <br/>
        <div>Team</div> 
        <br/>
        <div>Contact</div> 
        <br/>
        </div>
        <header className = 'welcome'>
        <div>WELCOME TO OUR STUDIO</div>
        <div className='middle-script'>IT'S NICE TO MEET YOU</div>
        <button className='button'>Show Me More</button>
        </header>
        </div>
        <section className= 'services'>
          <div>Services</div>
        </section>

      </div>
    );
  }
}

export default App;
