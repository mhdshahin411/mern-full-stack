import axios from "axios";

import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";


function Viewclient() {
  const [userdata, setuserdata] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:7789/getview/${id}`).then((res) => setuserdata(res.data))
   
  });
 

  return (
<div>
  {userdata.map((item)=>{
    return(
<Card style={{ width: "18rem", marginLeft: "10%", marginTop: "5%" }}>
      <Card.Body>
        <Card.Title>Book Name :{item.Name}</Card.Title>
        <br></br>
        <Card.Text>Author :{item.Author}</Card.Text>
        <Card.Text>Country :{item.Country}</Card.Text>
        <Card.Text>Year : {item.Year}</Card.Text>
        <Card.Text>Availability :{item.Availability}</Card.Text>
      </Card.Body>
    </Card>
    )
  })}

</div>

  );
}

export default Viewclient;
