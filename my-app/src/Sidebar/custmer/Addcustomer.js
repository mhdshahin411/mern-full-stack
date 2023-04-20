import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Addcustomer() {
    const [name, setname] = useState("")
    const [addressline1, setaddressline1] = useState("")
    const [addressline2,setaddressline2] = useState("")
    const [city,setcity] = useState("")
    const [state,setstate] = useState("")
    const [pincode ,setpincode] = useState("")
    
    const nav = useNavigate();

    const onsubmit = async (e)=>{
        e.preventDefault();
        
        const events = await axios.post("http://localhost:7789/addcustomer",{name, addressline1, addressline2, city, state, pincode})
        console.log(events);
        if(events){
          nav("/addcustumer")
        }
      }

    return (
        <>

    <div style={{ marginLeft: "20%", marginRight: "20%" }}>
    <h1>ADD customer</h1>
    <br></br>
    <Form.Group className="mb-3">
      <Form.Label>NAME</Form.Label>
      <Form.Control enable value={name} onChange={(e)=>setname(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>addressline1</Form.Label>
      <Form.Control enable value={addressline1} onChange={(e)=>setaddressline1(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>addressline2</Form.Label>
      <Form.Control enable value={addressline2} onChange={(e)=>setaddressline2(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>city</Form.Label>
      <Form.Control enable value={city} onChange={(e)=>setcity(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>ROLE</Form.Label>
      <Form.Control enable value={state} onChange={(e)=>setstate(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>PHONE NO.</Form.Label>
      <Form.Control enable value={pincode} onChange={(e)=>setpincode(e.target.value)}/>
    </Form.Group>
    <button onClick={onsubmit}>add custom</button>
  </div>
  

</>
       
    
  )
}

export default Addcustomer