import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { FcPlus} from "react-icons/fc";
import axios from 'axios';

function Team() {
const [data, setData] = useState("")

  useEffect(() => {
    axios.get("http://localhost:7789/getteam").then(res=>setData(res.data))
  
     }, [])
  const delFun =(id)=>{
    setData(data.filter((val)=>val._id!==id))
    axios.delete(`http://localhost:7789/getteam/deleteteam/${id}`).then(res=>(res.data))
  }
  
  
  return (
    <>
    <MDBTable align='middle'>
    <MDBTableHead>
      <tr>
       
        <th scope='col'>Name</th>
        
        <th scope='col'>dateofbirth</th>
        <th scope='col'>gender</th>
        <th scope='col'>description</th>
        <th scope='col'>role</th>
        <th scope='col'>phonenumber</th>
        <th scope='col'>image</th>
        <th scope='col'>submit</th>
      </tr>
    </MDBTableHead>
    {data && data.map((item)=>{
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
          <p className='fw-normal mb-1'>{item.dateofbirth}</p>
          
        </td>
        <td>
          <MDBBadge color='success' pill>
            {item.gender}
          </MDBBadge>
        </td>
        <td>{item.description}</td>
        <td>
         
            {item.role}
          
        </td>
        <td>
            {item.phonenumber}
        </td>
        <td>
            {item.image}
        </td>
        <td>
            {item.submit}
        </td>
        
        <td>
            <button ><Link to={`/editteam/${item._id}`}>edit</Link></button>
        </td>
        <td>
            <button onClick={()=>delFun(item._id)}>delete</button>
        </td>
      </tr>
      
     
    </MDBTableBody>
      )
    })}
    
  </MDBTable>
  <div style={{textAlign:"center",fontSize:"2em"}}> <Link to="/addteams"><FcPlus /></Link> </div>
  </>
  )
}

export default Team