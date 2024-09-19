import PropTypes from "prop-types";
import styles from "./thread-input.module.css";

const ThreadInput = ({ className = "" }) => {
  return (
    <div className={[styles.threadinput, className].join(" ")}>
      <div className={styles.thread}>
        <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
      </div>
      <div className={styles.infosActions}>
        <input
          className={styles.infos}
          id="input-tag"
          placeholder="Share something cool today"
          type="text"
        />
        <div className={styles.actions}>
          <div className={styles.actions1}>
            <label className={styles.label} for="file-271:1217">
              <img
                className={styles.paperclipIcon}
                alt=""
                src="/paperclip@2x.png"
              />
            </label>
            <input className={styles.input} type="file" id="file-271:1217" />
          </div>
          <button className={styles.actions2}>
            <img className={styles.sendIcon} alt="" src="/send@2x.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

ThreadInput.propTypes = {
  className: PropTypes.string,
};

export default ThreadInput;
