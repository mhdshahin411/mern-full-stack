import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Add() {
const [name, setname] = useState("")
const [age,setage] = useState("")
const [address,setaddress] = useState("")
const [tags,settags] = useState("")
const [action,setaction] = useState("")
const nav =useNavigate();
const onsubmit =async(e)=>{
    e.preventDefault();
    const events = await axios.post("http://localhost:7789/addorder",{name,age,address,tags,action})
    if(events){
        nav("/addorder")
    }
}

    return (
    <div>
      <div style={{ marginLeft: "20%", marginRight: "20%" }}>
        <h1>ADD ORDER</h1>
        <br></br>
        <Form.Group className="mb-3">
          <Form.Label>NAME</Form.Label>
          <Form.Control
            enable
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>age</Form.Label>
          <Form.Control
            enable
            value={age}
            onChange={(e) => setage(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>address</Form.Label>
          <Form.Control
            enable
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>tags</Form.Label>
          <Form.Control
            enable
            value={tags}
            onChange={(e) => settags(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>action</Form.Label>
          <Form.Control
            enable
            value={action}
            onChange={(e) => setaction(e.target.value)}
          />
        </Form.Group>
        
        <button onClick={onsubmit}>add order</button>
      </div>
    </div>
  );
}

export default Add;
