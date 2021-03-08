import React from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand as={NavLink} to="/" className="d-lg-none navLogo">
          Syuan En's portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link as={NavLink} to="/" exact>
              首頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              關於我
            </Nav.Link>
            <Nav.Link as={NavLink} to="/exercise">
              應用練習
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/portfolio">
              作品集
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(MyNavbar)
