import {Navbar} from "react-bootstrap"

function Top()
{
return(
  <>
<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
 
    <Navbar.Brand href="#home"><h2>List of Users</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
 
</Navbar>
</>
)
}
export default Top