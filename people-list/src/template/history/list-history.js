import React, {Component} from 'react'
import Listdata from './list-data'
import Data_His from '../../Data/data.history.json'

export default class ListEmployee extends Component{

  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อ</th>
            <th>นามสกุล</th>
            <th>แผนก</th>
            <th>วันที่</th>
            <th>เวลา</th>
          </tr>
        </thead>
        <tbody>
          
          {
            Data_His.map(
              Datas => 
              <Listdata 

              key={Datas.id} 
              id={Datas.userid} 
              firstname={Datas.firstname} 
              lastname={Datas.lastname} 
              department={Datas.department} 
              date={Datas.date} 
              time={Datas.time} 
              />
            )
          }
          
        </tbody>
      </table>
    )
  }
}