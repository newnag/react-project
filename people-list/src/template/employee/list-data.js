import React , {Component} from 'react';

export default class List_Employee extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.userid}</td>
        <td>{this.props.firstname}</td>
        <td>{this.props.lastname}</td>
        <td>{this.props.age}</td>
        <td>{this.props.department}</td>
      </tr>
    )
  }
}