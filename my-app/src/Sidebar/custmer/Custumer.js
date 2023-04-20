import React, { useEffect, useState } from 'react'
import {  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from "react-icons/ai";
// name, email, addressline1, addressline2, city, state, pincode 
function Custumer2() {
const [custom, setCustom] = useState([])
  useEffect(() => {
  axios.get("http://localhost:7789/getcustomer").then(res=>setCustom(res.data))
}, [])


const delFun=(id)=>{
  setCustom(custom.filter(val=>val._id!==id));
      axios.delete(`http://localhost:7789/deletecustomer/${id}`).then(res=>(res.data))
  
}
  return (
 <>
 <MDBTable align='middle'>
    <MDBTableHead>
      <tr>
        <th scope='col'>Name</th>
        <th scope='col'>addressline1</th>
        <th scope='col'>addressline2</th>
        <th scope='col'>city</th>
        <th scope='col'>state</th>
        <th scope='col'>pincode</th>
      </tr>
    </MDBTableHead>
{custom.map((item)=>{
  return(
    <MDBTableBody>
    <tr>
      <td>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>{item.name}</p>
            <p className='text-muted mb-0'>{item.email}</p>
          </div>
        </div>
      </td>
      <td>
        <p className='fw-normal mb-1'>{item.addressline1}</p>
        
      </td>
      <td>
        <p className='fw-normal mb-1'>
          {item.addressline2}
        </p>
      </td>
      <td>{item.city}</td>
      <td>
        <p className='fw-normal mb-1'>
          {item.state}
        </p>
      </td>
      <td>
        <td>{item.pincode}</td>
      </td>
      <td>
        <button onClick={()=>delFun(item._id)}>delete</button>
        
      </td>
     <td>
      <button><Link to={`/customedit/${item._id}`} style={{textDecoration:"none" , color:"black"}}>edit</Link></button>
     </td>
    </tr>
    
     
     
  </MDBTableBody>
  
  )
})}
  
  </MDBTable>
   <div style={{textAlign:"center",fontSize:"2em"}}><Link to="/addcustomer"><AiOutlinePlusCircle/> </Link></div>
  </>
  )
}

export default Custumer2