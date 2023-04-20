import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

function Editclient() {
  const [fetchdata, setFetchdata] = useState([]);
  const [put, setPut] = useState({
    name: fetchdata.name,
    username: fetchdata.username,
    email: fetchdata.email,
    status: fetchdata.status,
    role: fetchdata.role,
    phonenumber: fetchdata.phonenumber,
  });
  const { id } = useParams();

  const handlechnage = (e) => {
    setPut({ ...put, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:7789/viewclient/${id}`)
      .then((res) => setFetchdata(res.data));
  });
const nav = useNavigate();
const onSubmit = async (req,res) =>{
  await axios.put(`http://localhost:7789/editclient/${id}`,put).then(res=>setPut(res.data))
  if(put){
    nav("/Client")
  }
}

  return (
    <div>
      {fetchdata.map((item) => {
        return (
          <div style={{ marginLeft: "20%", marginRight: "20%" }}>
            <h1>EDIT CLIENT</h1>
            <br></br>
            <Form.Group className="mb-2">
              <Form.Label>NAME</Form.Label>
              <Form.Control
                enable
                name="name"
                defaultValue={item.name}
                onChange={handlechnage}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>USER NAME</Form.Label>
              <Form.Control
                enable
                name="username"
                defaultValue={item.username}
                onChange={handlechnage}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                enable
                name="email"
                defaultValue={item.email}
                onChange={handlechnage}
              />
            </Form.Group>
            <Form.Group className="mb-">
              <Form.Label>STATUS</Form.Label>
              <Form.Select
                enable
                name="status"
                defaultValue={item.status}
                onChange={handlechnage}
              >
                <option>signed in</option>
                <option>sign out</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>ADMIN</Form.Label>
              <Form.Select
                enable
                name="admin"
                defaultValue={item.admin}
                onChange={handlechnage}>
                      <option>admin</option>
                      <option>super admin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>PHONE NO.</Form.Label>
              <Form.Control
                enable
                name="phonenumber"
                defaultValue={item.phonenumber}
                onChange={handlechnage}
              />
            </Form.Group>
            <button onClick={onSubmit}>update</button>
          </div>
        );
      })}
    </div>
  );
}

export default Editclient;
