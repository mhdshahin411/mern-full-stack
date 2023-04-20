import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';


function Addteam() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [gender, setgender] = useState("");
  const [description, setdescription] = useState("");
  const [role, setrole] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [image, setimage] = useState("");
  const [submit, setsubmit] = useState("");
  const [success, setsuccess] = useState("")
  const nav = useNavigate();

  const onsubmit = async (e)=>{
    e.preventDefault();
    setsuccess(true)
  
    const events = await axios.post("http://localhost:7789/addteam",{name,email,dateofbirth,gender,description,role,phonenumber,image,submit})
    console.log(events);
  }
  return (
    <div>
    {success ? (nav("/addteam")) :(
      <div style={{ marginLeft: "20%", marginRight: "20%" }}>
      <h1>ADD TEAM</h1>
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
        <Form.Label>EMAIL</Form.Label>
        <Form.Control
          enable
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </Form.Group>

      <div>
        <p>SELECT DATE</p>
        <input
          style={{ width: "100%" }}
          type="date"
          value={dateofbirth}
          onChange={(e) => setdateofbirth(e.target.value)}
        ></input>
      </div>
      <div><br></br></div>

      <div value={gender} onChange={(e)=>setgender(e.target.value)}>
        <p>SELECT GENDER</p>
        <input type="radio" id="male" name="fav_language" value="male"></input>
        <label for="male">male</label><br></br>
        <input type="radio" id="female" name="fav_language" value="female"></input>
        <label for="female">female</label>
       
      </div>
      
      <div><br></br></div>
      <Form.Group className="mb-3">
        <Form.Label>DESCRIPTION</Form.Label>
        <Form.Control
          enable
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <div><br></br></div>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"  value={role} onChange={(e)=>setrole(e.target.value)}>
              <NavDropdown.Item href="#action/3.1" >admin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">superadmin</NavDropdown.Item>

              </NavDropdown> */}
        <div value={role} onChange={(e)=>setrole(e.target.value)}>
        <p>ROLE</p>
        <input type="radio" id="admin" name="fav_language" value="admin"></input>
        <label for="admin">admin</label><br></br>
        <input type="radio" id="superadmin" name="fav_language" value="superadmin"></input>
        <label for="superadmin">superadmin</label>
       
      </div>
    
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>PHONE NUMBER</Form.Label>
        <Form.Control
          enable
          value={phonenumber}
          onChange={(e) => setphonenumber(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>IMAGE</Form.Label>
        <Form.Control
          enable
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>SUBMIT</Form.Label>
        <Form.Control
          enable
          value={submit}
          onChange={(e) => setsubmit(e.target.value)}
        />
      </Form.Group>
      <button onClick={onsubmit}>add team</button>
    </div>
    )}
    </div>
  );
}

export default Addteam;
