import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Crudedit() {
  // const [success, setsuccess] = useState(false)
  const [userdata, setuserdata] = useState([]);
  const [events, setevents] = useState({
    name: userdata.Name,
    author: userdata.Author,
    country: userdata.Country,
    year: userdata.Year,
    availablity: userdata.Availability,
  });
  const { id } = useParams();
  // const nav = useNavigate();

  const handlechange = (e) => {
    setevents({ ...events, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:7789/getview/${id}`)
      .then((res) => setuserdata(res.data));
  });
  console.log(userdata);

  const onsubmit = async (req, res) => {
    await axios
      .put(`http://localhost:7789/bookedit/${id}`, events)
      .then((res) => setevents(res.data));

    // setsuccess(true);
  };
  return (
    <div>
      {userdata &&
        userdata.map((val) => {
          return (
            <div>
              <h3 style={{ marginTop: "5%", marginLeft: "20%" }}>
                EDIT BOOK PAGE
              </h3>
              <Form
                style={{
                  marginLeft: "20%",
                  marginRight: "30%",
                  marginTop: "5%",
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="Name"
                    placeholder="Enter name of the book"
                    defaultValue={val.Name}
                    onChange={handlechange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    name="Author"
                    placeholder="author name"
                    defaultValue={val.Author}
                    onChange={handlechange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    name="Country"
                    placeholder="Country name"
                    defaultValue={val.Country}
                    onChange={handlechange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    name="Year"
                    placeholder="year of published"
                    defaultValue={val.Year}
                    onChange={handlechange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Availability</Form.Label>
                  <Form.Control
                    name="Availability"
                    placeholder="yes or no"
                    defaultValue={val.Availability}
                    onChange={handlechange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onsubmit}>
                  update
                </Button>
              </Form>
            </div>
          );
        })}
    </div>
  );
}

export default Crudedit;
