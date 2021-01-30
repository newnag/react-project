import React , {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavItem extends Component{
  render(){
    return(
      <li id={this.props.item} className="menu"><Link to={this.props.tolink}>{this.props.item}</Link></li>
    )
  }
}