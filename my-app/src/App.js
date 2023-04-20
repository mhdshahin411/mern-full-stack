import React from "react";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Books from "./Sidebar/Books/Books";
import Login from "./Login";
import Navbar1 from "./Navbar1";
import Signup from "./Signup";
// import Home from "./Home";
import Addbook from "./Sidebar/Books/Addbook";
import Crudedit from "./Sidebar/Books/Crudedit";
import Viewclient from "./Sidebar/Books/Viewclient";
import Client from "./Sidebar/Client/Client";
import Addclient from "./Sidebar/Client/Addclient";
import Editclient from "./Sidebar/Client/Editclient";
import Custumer2 from "./Sidebar/custmer/Custumer";
import Customeredit from "./Sidebar/custmer/Customeredit";
import Addcustomer from "./Sidebar/custmer/Addcustomer";
import Team from "./Sidebar/teams/Team";
import Addteam from "./Sidebar/teams/Addteam";
import Editteam from "./Sidebar/teams/Editteam";
import Order from "./Sidebar/order/Order";
import Edit from "./Sidebar/order/Edit";
import Add from "./Sidebar/order/Add";
import Createorder from "./Sidebar/Createorder";
// import Siderbar from "./Siderbar";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar1 />
        
        <Routes>
          <Route path="Addbook" element={<Addbook/>}/>
          {/* <Route path="Home" element={<Home/>}/> */}
          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          <Route path="/Books" element={<Books />} />
          <Route path="Crudedit/:id"  element={<Crudedit/>}/>
          <Route path="Viewclient/:id" element={<Viewclient/>} />
          <Route path="Client" element={<Client/>}/>
          <Route path="addclient" element={<Addclient/>}/>
          <Route path="editclient/:id" element={<Editclient/>}/>
          <Route path="addcustumer" element={<Custumer2/>}/>
          <Route path="customedit/:id" element={<Customeredit/>}/>
          <Route path="/addcustomer" element={<Addcustomer/>}/>
          <Route path="/addteam" element={<Team/>}/>
          <Route path="/addteams" element={  <Addteam/>}/>
          <Route path="/editteam/:id" element={<Editteam/>}/>
          <Route path="addorder" element={<Order/>}/>
          <Route path="editorder/:id" element={  <Edit/>}/>
          <Route path="/add" element={ <Add/> }/>
          
          <Route path="createorder" element={<Createorder/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
