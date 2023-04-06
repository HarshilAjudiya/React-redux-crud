import React, { Component } from 'react'
import List from './List'

export default class Home extends Component {
    usersList = [{id:1,name:'test'}];
  render() {
    return (
      <div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {this.usersList.map((userData)=>(
                    <List user={userData} key={userData.id}/>
                ))}
            </tbody>
        </table>
      </div>
    )
  }
}
