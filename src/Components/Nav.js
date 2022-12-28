import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { openNotify } from "../Noty";

function NavBar() {
  const style2 = {
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    width: "100%",
    height: "90px",
  };
  const style = {
    textDecoration: "none",
    margin: "10px",
  };

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
    window.location.reload(false);

    openNotify("success", "You are Logged Out", "Welcome to Log In Page");
  };

  return (
    <Navbar style={style2}>
     
        <button className="btn btn-outline-primary">Home</button>
     
        <Nav className="me-auto">
          <button className="btn btn-outline-danger" onClick={logout} style={{marginLeft:"22%"}}>
            LogOut
          </button>
        </Nav>
        <Container>  </Container>
    </Navbar>
  );
}
export default NavBar;
