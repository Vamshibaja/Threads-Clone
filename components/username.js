import PropTypes from "prop-types";
import styles from "./username.module.css";

const Username = ({ className = "", username }) => {
  return (
    <div className={[styles.username, className].join(" ")}>{username}</div>
  );
};

Username.propTypes = {
  className: PropTypes.string,
  username: PropTypes.string,
};

export default Username;
