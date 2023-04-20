import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

function Customeredit() {
  const [fetchdata, setFetchdata] = useState([]);
  const [put, setPut] = useState({
    name: fetchdata.name,
    addressline1: fetchdata.addressline1,
    addressline2: fetchdata.addressline2,
    city: fetchdata.city,
    state: fetchdata.state,
    pincode: fetchdata.pincode,
  });
  const { id } = useParams();

  const handlechnage = (e) => {
    setPut({ ...put, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:7789/viewcustomer/${id}`)
      .then((res) => setFetchdata(res.data));
  });
const nav =useNavigate();
const onSubmit = async (req,res) =>{
  await axios.put(`http://localhost:7789/editcustomer/${id}`,put).then(res=>setPut(res.data))
  if(put){
    nav("/addcustumer")
  }
}

  return (
    <div>
      {fetchdata.map((item) => {
        return (
          <div style={{ marginLeft: "20%", marginRight: "20%" }}>
            <h1>EDIT CUSTOMER</h1>
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
              <Form.Label>addressline1</Form.Label>
              <Form.Control
                enable
                name="addressline1"
                defaultValue={item.addressline1}
                onChange={handlechnage}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>addressline2</Form.Label>
              <Form.Control
                enable
                name="addressline2"
                defaultValue={item.addressline2}
                onChange={handlechnage}
              />
            </Form.Group>
            <Form.Group className="mb-">
              <Form.Label>city</Form.Label>
              <Form.Select
                enable
                name="city"
                defaultValue={item.city}
                onChange={handlechnage}
              >
                <option>signed in</option>
                <option>sign out</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>state</Form.Label>
              <Form.Select
                enable
                name="state"
                defaultValue={item.state}
                onChange={handlechnage}>
                      <option>admin</option>
                      <option>super admin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>pincode</Form.Label>
              <Form.Control
                enable
                name="pincode"
                defaultValue={item.pincode}
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

export default Customeredit;
