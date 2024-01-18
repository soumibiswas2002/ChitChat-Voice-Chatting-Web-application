import { Avatar, Typography } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Main.css";
import { useNavigate } from "react-router-dom";

const Card = ({ img, name, email, body }) => {
  const navigate = useNavigate();

  const handleEditNavigate = () => {
    navigate("/create-profile", {
      state: {
        img: img,
        name: name,
        email: email,
        body: body,
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
        maxWidth: "720px",
      }}
    >
      <div className="profile_img">
        <Avatar
          src={img}
          style={{
            width: 320,
            height: 320,
          }}
        />
      </div>
      <div className="profile_bio">
        <Typography className="profile_titles">{name}</Typography>
      </div>
      <div className="profile_bio">
        <Typography className="profile_emails">{email}</Typography>
      </div>
      <div className="profile_bio">
        <Typography className="profile_about">{body}</Typography>
      </div>
      <div style={{ display: "flex", gap: "15px", padding: "10px" }}>
        <button
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
          onClick={handleEditNavigate}
        >
          <FiEdit /> Edit Profile
        </button>
        <button
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
          onClick={() => {
            navigate("/rooms");
          }}
        >
          Go To Roooms <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default Card;
