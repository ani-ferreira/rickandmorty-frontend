import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.spinner}>
      <div className="spinner-border" role="status"></div>
    </div>
  );
};

export default Loader;
