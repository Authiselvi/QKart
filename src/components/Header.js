import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory, Link } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  let user = localStorage.getItem("username");

  return (
    <Box className="header">
      <Box className="header-title">
        {" "}
        <img src="logo_light.svg" alt="QKart-icon"></img>{" "}
      </Box>{" "}
      {/* <div> {children} </div> */}{" "}
      {hasHiddenAuthButtons ? (
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => history.push("/")}
        >
          {" "}
          Back to explore{" "}
        </Button>
      ) : (
        <div>
          {" "}
          {user !== null ? (
            <Stack direction="row">
              {" "}
              <img src="avatar.png" alt={user} /> <h5>{user}</h5>{" "}
              <Button
                name="logout"
                onClick={() => {
                  localStorage.clear();
                  history.push("/");
                  window.location.reload();
                }}
              >
                {" "}
                Logout{" "}
              </Button>{" "}
            </Stack>
          ) : (
            <Stack direction="row">
              {" "}
              <Button onClick={() => history.push("/login")}>Login</Button>{" "}
              <Button
                onClick={() => history.push("/register")}
                variant="contained"
              >
                {" "}
                Register{" "}
              </Button>{" "}
            </Stack>
          )}{" "}
        </div>
      )}{" "}
    </Box>

    // <Box className="header">
    //   <Box className="header-title">
    //       <img src="logo_light.svg" alt="QKart-icon"></img>
    //   </Box>
    //   <Link className="link" to="/">
    //   <Button
    //     className="explore-button"
    //     startIcon={<ArrowBackIcon />}
    //     variant="text"
    //   >
    //     Back to explore
    //   </Button>
    //   </Link>
    // </Box>
  );
};

export default Header;
