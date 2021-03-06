import React, { Component } from 'react';
import logo from '../images/logo.svg'
import {FaAlignJustify} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class NavBar extends Component{
constructor(props){
    super(props);
    this.state={
        isOpen:false
    }


}
    
    handelToggle=()=>{
        this.setState(
            {
                isOpen:!this.state.isOpen
            }
        )
    }
    render() {
        return (
            <nav className="navbar">
              <div className="nav-center">
                  <div className="nav-header">
                      <Link to="/">
                          <img src={logo} alt="Beach Resort"/>
                      </Link>
                      <button type="button" className="nav-btn" onClick={this.handelToggle}>
                        <FaAlignJustify className="nav-icon"/>
                      </button>
                      </div>
                      <ul className={this.state.isOpen ? "nav-links show-nav":"nav-links"}>
                          <li>
                              <Link to="/">Home</Link>
                          </li>
                          <li>
                              <Link to="/rooms">Rooms</Link>
                          </li>
                          <li>
                              <Link to="/covid-19">Covid-19</Link>
                          </li>
                      </ul>
                      </div>  
            </nav>
        );
    }
}