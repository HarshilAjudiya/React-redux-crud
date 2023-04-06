import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom'

export default function Registration() {
    const [inputField,setInputField] = useState({
        name:'',
        email:'',
        phone:''
    })
  return (
    <div>Registration</div>
  )
}
