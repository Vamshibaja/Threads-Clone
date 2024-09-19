import ThreadInput from "./thread-input";
import Thread from "./thread";
import PropTypes from "prop-types";
import styles from "./feed.module.css";
import { useState,useEffect } from "react";

const Feed = ({ className = "" }) => {
  const [threads,setThreads]=useState({data:[]});
  const getThreads = async ()=>{
    try {
      const request=await fetch('/api/threads');
      const data= await request.json()
      console.log("Data is",data);
      setThreads(data);
    } catch (error) {
      console.log("Error ",error)
    }
  };
  useEffect(()=>{
    getThreads(); 
  },[])
  return (
    <div className={[styles.feed, className].join(" ")}>
      <ThreadInput getThreads={getThreads}/>
      {threads && threads.data.map((thread)=>{
        return (
          <Thread
            authorImage="/avatar1.svg"
            threadContent={thread.content}
            likes={`${thread.likes || 0} likes`}
            timeSpent={thread.timestamp}
            username={thread.user}
          />
        )
      })}
      <Thread
        authorImage="/avatar1.svg"
        threadContent="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        likes="7 Likes"
        timeSpent="2min"
        username="aura"
      />
      <Thread
        authorImage="/avatar2@2x.png"
        threadContent={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
        likes="2 Likes"
        timeSpent="2min"
        username="aura"
      />
      <Thread
        authorImage="/avatar2@2x.png"
        threadContent="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
        likes="16 Likes"
        timeSpent="2min"
        username="aura"
      />
      <Thread
        authorImage="/avatar2@2x.png"
        threadContent="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        likes="7 Likes"
        timeSpent="2min"
        username="aura"
      />
    </div>
  );
};

Feed.propTypes = {
  className: PropTypes.string,
};

export default Feed;
