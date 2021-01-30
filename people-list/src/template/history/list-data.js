import React , {Component} from 'react';

export default class List_Employee extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.firstname}</td>
        <td>{this.props.lastname}</td>
        <td>{this.props.department}</td>
        <td>{this.props.date}</td>
        <td>{this.props.time}</td>
      </tr>
    )
  }
}