import React, { useEffect, useState } from "react";
import {
  MDBBadge,
  // MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,} from "mdb-react-ui-kit";
import axios from "axios"
import { FaPencilAlt } from "react-icons/fa";
import {  FcEmptyTrash,FcPlus} from "react-icons/fc";

import { Link } from "react-router-dom";

// import {IconContext} from "react-icons"

function Client() {
  // const [filtereditem, setfiltereditem] = useState()
  const [searchquery, setsearchquery] = useState()
  const [client, setClient] = useState([])
  
  const handlesearch=(e)=>{
    const query= e.target.value;
    setsearchquery(query)

    // const filtereedata = client.filter(item=>item.name.toLowerCase().includes(query.toLowerCase()));
    // setfiltereditem(filtereedata)
  }


  useEffect(() => {
    axios.get("http://localhost:7789/getclient").then(res=>setClient(res.data));
  }, [])
  
  const delFun = (id) =>{
    setClient(client.filter(val=>val._id!==id));
      axios.delete(`http://localhost:7789/deleteclient/${id}`).then(res=>(res.data))
  }
    return (
      <>
      {/* <input type="text" value={searchquery} onChange={handlesearch}/> */}
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          {/* <th>NO.</th> */}
          <th scope="col">NAME</th>
          <th scope="col">USERNAME</th>
          <th scope="col">STATUS</th>
          <th scope="col">ROLE</th>
          <th scope="col">PH NO</th>
          {/* <th scope='col'>BUTTONS</th> */}
        </tr>
      </MDBTableHead>
      {client.map((item , index)=>{
        return(
          <MDBTableBody>
        <tr>
          {/* <td>{index + 1}</td> */}
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">{item.name}</p>
                <p className="text-muted mb-0">{item.email}</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">{item.username}</p>
            {/* <p className='text-muted mb-0'>IT department</p> */}
          </td>
          <td>
            <MDBBadge color='warning' pill>
              {item.status}
            </MDBBadge>
          </td>
          <td>
          <MDBBadge color='primary' pill>
          {item.role}
            </MDBBadge>
          </td>
          <td>
            <td>
              {item.phonenumber}
            </td>
          </td>
          <td>
         <Link  style={{color:"blue"}} to={`/editclient/${item._id}`}> <FaPencilAlt /> </Link>
          </td>
          <td>
          <Link onClick={()=>delFun(item._id)}>  <FcEmptyTrash/>  </Link>
          </td>
        </tr>

      </MDBTableBody>
        )
      })}
      
    </MDBTable>
    <div style={{textAlign:"center",fontSize:"2em"}}> <Link to="/addclient"><FcPlus /></Link> </div>
    
  </>    
  );

}

export default Client;
