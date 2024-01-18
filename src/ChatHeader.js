import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EditLocationAltRoundedIcon from "@mui/icons-material/EditLocationAltRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

function ChatHeader() {
  return (
    <div className="ChatHeader">
      <h3>this is chat header</h3>

      <div className="chatHeaderLeft">
        <h3>
          <span className="chartHeader__hash">#</span>
          Test channel name
        </h3>
      </div>

      <div className="chatHeaderRight">
        <NotificationsIcon />
        <EditLocationAltRoundedIcon />
        <PeopleAltRoundedIcon />

        <div className="chatHeader__search">
          <input placeholder="search" />
          <SearchRoundedIcon />
        </div>
        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
