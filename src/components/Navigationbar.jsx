import logo from './logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img src={logo} alt="" width="80" height="40" className="d-inline-block align-text-top" />Top News</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/headlines">Headlines</Nav.Link>
          <Nav.Link href="/search">Search News</Nav.Link>
          <Nav.Link href="/latest">Latest News</Nav.Link>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/businessandfinance">Business and Finance</NavDropdown.Item>
            <NavDropdown.Item href="/culture">Culture</NavDropdown.Item>
            <NavDropdown.Item href="/economics">Economics</NavDropdown.Item>
            <NavDropdown.Item href="/education">Education</NavDropdown.Item>
            <NavDropdown.Item href="/entertainment">Entertainment</NavDropdown.Item>
            <NavDropdown.Item href="/environment">Environment</NavDropdown.Item>
            <NavDropdown.Item href="/health">Health-Care</NavDropdown.Item>
            <NavDropdown.Item href="/india">India</NavDropdown.Item>
            <NavDropdown.Item href="/music">Music</NavDropdown.Item>
            <NavDropdown.Item href="/worldpolitics">World Politics</NavDropdown.Item>
            <NavDropdown.Item href="/scienceandtechnology">Science and Technology</NavDropdown.Item>
            <NavDropdown.Item href="/sports">Sports</NavDropdown.Item>
          </NavDropdown>
         </Nav> 
      
      </Navbar.Collapse>

    </Navbar>

    );
}
export default Navigationbar;