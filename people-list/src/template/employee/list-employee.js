import React, {Component} from 'react'
import Listdata from './list-data'
import Data_Emp from '../../Data/data.employee.json'

export default class ListEmployee extends Component{

  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อ</th>
            <th>นามสกุล</th>
            <th>อายุ</th>
            <th>แผนก</th>
          </tr>
        </thead>
        <tbody>
          
          {
            Data_Emp.map(Datas => <Listdata key={Datas.id} id={Datas.id} firstname={Datas.firstname} lastname={Datas.lastname} age={Datas.age} department={Datas.department} />)
          }
          
        </tbody>
      </table>
    )
  }
}