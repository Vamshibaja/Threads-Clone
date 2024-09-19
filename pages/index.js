import Navbar from "../components/navbar";
import UserInfo from "../components/user-info";
import Feed from "../components/feed";
import Infos from "../components/infos";
import styles from "./index.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      <main className={styles.feed} id="main">
        <Navbar />
        <section className={styles.contentcontainer}>
          <UserInfo />
          <Feed />
          <Infos />
        </section>
      </main>
    </div>
  );
};

export default Content;
