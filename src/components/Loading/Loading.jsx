import styles from "./Loading.module.css";

function Loading() {

    return (
        <div className={styles.loading}>
            <span><h1>Loading</h1><div className={styles.loader}></div></span>
        </div>
    )
};

export default Loading;