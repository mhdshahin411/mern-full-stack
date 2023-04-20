import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from 'react-router-dom';

function Editteam() {
    const [userdata, setuserdata] = useState([]);
    const [events, setevents] = useState({
      name: userdata.Name,
      email: userdata.email,
      dateofbirth: userdata.dateofbirth,
      geneder: userdata.gender,
      description: userdata.description,
      role:userdata.role,
      phonenumber:userdata.phonenumber,
      image:userdata.image,
      submit:userdata.submit
    });
    const {id} = useParams();
    const nav = useNavigate();
    const handlechange =(e) =>{
        setevents({...events ,[e.target.name]:(e.target.value)})
    }

    useEffect(() => {
      axios.get(`http://localhost:7789/viewteam/${id}`,).then((res)=>setuserdata(res.data))
    })
    // console.log(userdata);
    const onsubmit = async ( req,res) =>{
        await axios.put(`http://localhost:7789/editteam/${id}`,events).then(res=>setevents(res.data))
        if(events){
            alert("updated")
            nav("/addteam")
        }else{
            alert("not updated")
        }
    }

    return (
    <>
    {userdata.map((item)=>{
        return(
            <div style={{ marginLeft: "20%", marginRight: "20%" }}>
      <h1>EDIT TEAM</h1>
      <br></br>
      <Form.Group className="mb-3">
        <Form.Label>NAME</Form.Label>
        <Form.Control
          enable
          name='name'
          defaultValue={item.name}
          onChange={handlechange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control
            name='email'
          enable
          defaultValue={item.email}
          onChange={handlechange}
        />
      </Form.Group>

      <div>
        <p>SELECT DATE</p>
        <input
         name='dateofbirth'
          style={{ width: "100%" }}
          type="date"
          defaultChecked={item.dateofbirth}
          defaultValue={item.dateofbirth}
          onChange={handlechange}
        ></input>
      </div>
      <div><br></br></div>

      <div  onChange={handlechange} >
        <p>SELECT GENDER</p>
        <input type="radio" id="male" name="gender" defaultChecked={item.gender==="male"} value="male"></input>
        <label for="male">male</label><br></br>
        <input type="radio" id="female" name="gender" defaultChecked={item.gender==="female"} value="female"></input>
        <label for="female">female</label>
       
      </div>
      
      <div><br></br></div>
      <Form.Group className="mb-3">
        <Form.Label>DESCRIPTION</Form.Label>
        <Form.Control
          enable
          defaultValue={item.description}
          onChange={handlechange}
          name='description'
        />
        <div><br></br></div>
        <div  onChange={handlechange}>
        <p>ROLE</p>
        <input type="radio" id="admin" name="role" defaultChecked={item.role==="admin"} value="admin"></input>
        <label for="male">admin</label><br></br>
        <input type="radio" id="superadmin" name="role"  defaultChecked={item.role==="superadmin"} value="superadmin"></input>
        <label for="female">superadmin</label>
       
      </div>
    
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>PHONE NUMBER</Form.Label>
        <Form.Control
          enable
          defaultValue={item.phonenumber}
          onChange={handlechange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>IMAGE</Form.Label>
        <Form.Control
          enable
          name='image'
          defaultValue={item.image}
          onChange={handlechange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>SUBMIT</Form.Label>
        <Form.Control
          enable
          name='submit'
          defaultValue={item.submit}
          onChange={handlechange}
        />
      </Form.Group>
      <button onClick={onsubmit}>upadate team</button>
    </div>
        )
    })}
    
    </>
  )
}

export default Editteam