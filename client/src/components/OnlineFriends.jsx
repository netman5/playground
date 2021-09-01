import React from "react";
import useStyles from "./ComponentsStyle";

function OnlineFriends({ user }) {
  const classes = useStyles();

  const Friends = () => {
    return (
      <li className={classes.rightbarFriend}>
        <div className={classes.rightbarProfileImgContainer}>
          <img
            src={user.profilePicture}
            alt=""
            className={classes.rightProfileImg}
          />
          <span className={classes.rightbarOnline}></span>
        </div>
        <span className={classes.rightbarUsername}>{user.username}</span>
      </li>
    );
  };
  return <>{user.id === 1 ? null : <Friends />}</>;
}

export default OnlineFriends;
