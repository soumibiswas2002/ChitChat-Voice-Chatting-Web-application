import "./Main.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../app/base_url";
import Fab from "@mui/material/Fab";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Main() {
  const [data, setdata] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    axios
      .post(`${base_url}user/getdetails`, {
        id: userId,
      })
      .then((res) => {
        localStorage.setItem("userProfile",JSON.stringify(res.data))
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div className="App">
      <div className="main">
        <Fab
          variant="extended"
          style={{
            position: "absolute",
            left: "70%",
            top: "10%",
            textTransform: "capitalize",
          }}
          onClick={handleLogOut}
        >
          <BiLogOut /> &nbsp; LogOut
        </Fab>
        <div>
          <Card
            img={data.profilePicture}
            name={data.name}
            email={data.email}
            body={data.about}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
