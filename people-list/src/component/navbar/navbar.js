import React , {Component} from 'react';
import NavItem from './navitem'
import './nav.css'

export default class Navbar extends Component{
  constructor(props){
    super(props);
    this.state = {
      'NavItemActive': ''
    }
  }

  render() {
    return (
      <nav>
        <ul>
          <NavItem item="Home" tolink="/"></NavItem>
          <NavItem item="Employee" tolink="employee"></NavItem>
          <NavItem item="History" tolink="history"></NavItem>
          <NavItem item="Contact" tolink="contact"></NavItem>
        </ul>
      </nav>
    )
  }
}