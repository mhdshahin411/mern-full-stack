import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from 'react-router-dom';
function Edit() {
    const [data, setdata] = useState([])
    const [events, setevents] = useState({name:data.name,age:data.age,address:data.address,tags:data.tags,action:data.action})
const handlechange =(e)=>{
        setevents({...events ,[e.target.name] : e.target.value})
}
    const nav = useNavigate();

    const {id}= useParams();
    useEffect(() => {
        axios.get(`http://localhost:7789/vieworder/${id}`).then(res=>setdata(res.data))
    })
    const onsubmit =async(req,res)=>{
        await axios.put(`http://localhost:7789/editorder/${id}`,events).then(res=>setevents(res.data))
        if(events){
            nav("/addorder")
        }
    }
  return (
    <div>
        {data.map((item)=>{
            return(
                <div style={{ marginLeft: "20%", marginRight: "20%" }}>
    <h1>EDIT ORDER</h1>
    <br></br>
    <Form.Group className="mb-3">
      <Form.Label>NAME
</Form.Label>
      <Form.Control enable name='name' defaultValue={item.name} onChange={handlechange} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>AGE
</Form.Label>
      <Form.Control enable  name='age' defaultValue={item.age} onChange={handlechange}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>ADDRESS
</Form.Label>
      <Form.Control enable  name='address' defaultValue={item.address} onChange={handlechange}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>TAGS
</Form.Label>
      <Form.Control enable name='tags' defaultValue={item.tags} onChange={handlechange} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>ACTION</Form.Label>
      <Form.Control enable  name='action' defaultValue={item.action} onChange={handlechange}/>
    </Form.Group>
    <button onClick={onsubmit}>update order</button>
  </div>
            )
        })}
        
    </div>
  )
}

export default Edit