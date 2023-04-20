import React from 'react'
import { Link } from "react-router-dom"
import { Container, Nav, Navbar } from 'react-bootstrap'
import Sidebar from './Sidebar/Sidebar'

function Navbar1() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <ul class="navbar-nav" style={{position:"initial"}}>
    
    <li class="nav-item dropdown">
     
      <Sidebar/>
      
      
    </li>
  </ul>
      <Navbar.Brand href="/"><Link to="Home" style={{textDecoration:"none",color:"white"}}>HOME🏠PAGE</Link></Navbar.Brand>
      
      <Nav className="d-flex">
      
        <Nav.Link href="#home" >  <Link to="Signup" style={{textDecoration:"none",color:"white "}}>REGISTER</Link></Nav.Link>
        <Nav.Link href="#features"><Link to="Login" style={{textDecoration:"none",color:"white " }}>LOGIN</Link></Nav.Link>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
 
</div>
      </Nav>
      
    </Container>                                                                                                      
  </Navbar>
  
 
  )
}

export default Navbar1