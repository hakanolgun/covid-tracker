import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <a
        className={styles.githublink}
        href="https://github.com/hakanolgun/covid-tracker"
      >
        Github Repo
      </a>
    </div>
  );
}
