import React from "react";
import useStyles from "./ComponentsStyle";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

function TopBar({ user }) {
  console.log(user);
  const classes = useStyles();
  return (
    <div className={classes.topbarContainer}>
      <div className={classes.topbarLeft}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className={classes.logo}>PlayGround</span>
        </Link>
      </div>

      <div className={classes.topbarCenter}>
        <div className={classes.searchBar}>
          <Search className={classes.searchIcon} />
          <input
            placeholder="search fro friends, posts or videos"
            className={classes.searchInput}
          />
        </div>
      </div>

      <div className={classes.topbarRight}>
        <div className={classes.topbarLinks}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <span className={classes.topbarLink}>Homepage</span>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <span className={classes.topbarLink}>Timeline</span>
          </Link>
        </div>

        <div className={classes.topbarIcons}>
          <div className={classes.topbarIconItem}>
            <Person />
            <span className={classes.topbarIconBadge}>1</span>
          </div>

          <div className={classes.topbarIconItem}>
            <Chat />
            <span className={classes.topbarIconBadge}>2</span>
          </div>

          <div className={classes.topbarIconItem}>
            <Notifications />
            <span className={classes.topbarIconBadge}>10</span>
          </div>
        </div>
      </div>
      <img src="./assets/img/gee.jpeg" alt="" className={classes.topbarImg} />
    </div>
  );
}

export default TopBar;
