import PropTypes from "prop-types";
import styles from "./user-info.module.css";

const UserInfo = ({ className = "" }) => {
  return (
    <div className={[styles.userinfo, className].join(" ")}>
      <div className={styles.infos}>
        <img className={styles.avatarBigIcon} alt="" src="/avatar-big.svg" />
        <div className={styles.infos1}>
          <div className={styles.infos2}>
            <h2 className={styles.alissonRochinski}>Alisson Rochinski</h2>
            <div className={styles.infos3}>
              <div className={styles.arochinski}>arochinski</div>
              <div className={styles.threadsnetWrapper}>
                <div className={styles.threadsnet}>threads.net</div>
              </div>
            </div>
          </div>
          <div className={styles.uiDesignerContainer}>
            <p className={styles.uiDesigner}>
              UI Designer | Let's redesign the world
            </p>
            <p className={styles.uiDesigner}>alisson.rochinski@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.infos4}>
        <div className={styles.respostasECurtidas}>
          <div className={styles.seguidores}>2957 seguidores</div>
          <div className={styles.respostasECurtidasChild} />
          <div className={styles.seguidores}>rochinski.com</div>
        </div>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  className: PropTypes.string,
};

export default UserInfo;
