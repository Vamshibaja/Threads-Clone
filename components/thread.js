import Username from "./username";
import PropTypes from "prop-types";
import styles from "./thread.module.css";
// import { getThreads } from "./feed";

const Thread = ({
  className = "",
  authorImage,
  threadContent,
  likes,
  timeSpent,
  username,
  id,
  getThreads,
}) => {
  const addLike= async()=>{
    console.log("thread.js | adding likes")
    try {
      const request=await fetch(`/api/threads/${id}`,{
        method:"PUT",
        headers: {
          "Content-Type": "application/json",  // Add the Content-Type header
        },
        body:JSON.stringify({type:"addLike",id}),
      })
      
      const data = await request.json();
      // if(getThreads()){
        getThreads();
      // }
      console.log("threads.js data | is",data);


    } catch (error) {
      console.log("thred.js Errror is ",error);
    }
  }
  const deletePost = async()=>{
      console.log("deleting a post");
      try {
        const request =await fetch(`api/threads/${id}`,{
          method:"DELETE",
        })
        const data = request.json();
        console.log("thread.js | ",data);
        // if(getThreads()){
          getThreads();
        // }
      } catch (error) {
        console.log("Error deleting ",error);
        res.json({success:false,msg:error});
      }
  }
  return (
    <div className={[styles.thread, className].join(" ")}>
      <div className={styles.thread1}>
        <div className={styles.thread2}>
          <img className={styles.avatarIcon} alt="" src={authorImage} />
        </div>
        <div className={styles.infosActions}>
          <div className={styles.info}>
            <div className={styles.headingInfos}>
              <Username username={username} />
              <div className={styles.rightInfos}>
                <div className={styles.min}>{timeSpent}</div>
                <div className={styles.dots} onDoubleClick={deletePost}>
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                </div>
              </div>
            </div>
            <div className={styles.iveBeenExploring}>{threadContent}</div>
          </div>
          <div className={styles.actions}  onClick={addLike}>
            <img className={styles.likeIcon} alt="" src="/like@2x.png" />
            {/* <img className={styles.likeIcon} alt="" src="/comment@2x.png" />
            <img className={styles.likeIcon} alt="" src="/repost@2x.png" />
            <img className={styles.likeIcon} alt="" src="/send1@2x.png" /> */}
          </div>
          <div className={styles.reactions}>
            <div className={styles.likes}>{likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Thread.propTypes = {
  className: PropTypes.string,
  authorImage: PropTypes.string,
  threadContent: PropTypes.string,
  likes: PropTypes.string,
  timeSpent: PropTypes.string,
  username: PropTypes.string,
};

export default Thread;
