import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


const Navigation = () =>{

return(
  <div>
<Navbar collapseOnSelect expand="md" sticky="top" bg="dark" variant="dark">
  <Nav>
    <Nav.Link href="/">Home</Nav.Link>
</Nav>
</Navbar>
</div>
)
}

export default Navigation;