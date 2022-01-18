import React from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap' 
const Header = () => {
    return (
        <div style={{background:"black",color:"white"}}>
            <Navbar bg="dark" expand="lg" variant="dark" >
  <Container >
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/movies">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/registred">Registration</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
  
</Navbar>
<Container>
    <a>gopal</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a>gopal</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a>gopal</a>&nbsp;&nbsp;&nbsp;&nbsp;
  
</Container>
        </div>
    )
}

export default Header