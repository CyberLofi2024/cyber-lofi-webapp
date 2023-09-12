import styles from "./loading.module.scss";
export default function LoadingIndicator() {
  return (
    <div className={styles.LoadingContainer}>
      <img
        src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!sw800"
        alt=""
      />
    </div>
  );
}
