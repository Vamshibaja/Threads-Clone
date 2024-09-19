import PropTypes from "prop-types";
import styles from "./thread-input.module.css";
import { useState } from "react";
import { getThreads } from "./feed";

const ThreadInput = ({ className = "" ,getThreads}) => {
  const [input,setInput]=useState("");
  const postThread = async()=>{
    try {
      const request = await fetch('/api/threads',{
        method:"POST",
        headers: {
          "Content-Type": "application/json",  // Add the Content-Type header
        },
        body:JSON.stringify({content:input,user:"Vamshibaja"})
      });
      const data = await request.json();
      console.log("thread-input.js | data is ",data);
      // if (getThreads) {
        getThreads();  // Call the getThreads function to refresh the feed
      // }
      setInput("")
     

    } catch (error) {
      console.log("Error ",error)
    }
  }
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
          value={input}
          onChange={e=>setInput(e.target.value)}
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
          <button className={styles.actions2}onClick={postThread}>
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
