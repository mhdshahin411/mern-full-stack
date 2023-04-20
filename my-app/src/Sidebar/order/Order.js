import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function Order() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7789/getorder")
      .then((res) => setOrder(res.data));
  }, []);
  // console.log(order);
const deleFun =(id)=>{
  setOrder(order.filter(val=>val._id!==id));
 axios.delete(`http://localhost:7789/deleteorder/${id}`).then(res=>(res.data))
}
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>ADDRESS</th>
            <th>TAGS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        {order.map((item) => {
          return (
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
                <td>{item.tags}</td>
                <td>{item.action}</td>
                <td>
                  <button><Link to={`/editorder/${item._id}`}>edit</Link></button>
                </td>
                <td>
                  <button onClick={()=>deleFun(item._id)}>delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>

      <button><Link to={"/add"}>add order</Link></button>
    </div>
  );
}

export default Order;
