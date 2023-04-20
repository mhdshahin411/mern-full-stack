import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Addclient() {
const [name, setname] = useState("")
const [username, setusername] = useState("")
const [email, setemail] = useState("")
const [status, setstatus] = useState("")
const [role,setrole] = useState("")
const [phonenumber,setphonenumber] = useState("")
const [success, setsuccess] = useState(false)
const nav =useNavigate()

const onsubmit = async (e)=>{
  e.preventDefault();
  setsuccess(true)

  const events = await axios.post("http://localhost:7789/addclient",{name, username, email, status, role, phonenumber})
  console.log(events);
}

  return (
 <div>
  {success ? (nav("/Client")) : (
    <div style={{ marginLeft: "20%", marginRight: "20%" }}>
      <h1>ADD CLIENT</h1>
      <br></br>
      <Form.Group className="mb-3">
        <Form.Label>NAME</Form.Label>
        <Form.Control enable value={name} onChange={(e)=>setname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>USER NAME</Form.Label>
        <Form.Control enable value={username} onChange={(e)=>setusername(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control enable value={email} onChange={(e)=>setemail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>STATUS</Form.Label>
      <Form.Control enable value={status} onChange={(e)=>setstatus(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ROLE</Form.Label>
        <Form.Control enable value={role} onChange={(e)=>setrole(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>PHONE NO.</Form.Label>
        <Form.Control enable value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)}/>
      </Form.Group>
      <button onClick={onsubmit}>add</button>
    </div>
  )}
 </div>
    
  );
}

export default Addclient;
