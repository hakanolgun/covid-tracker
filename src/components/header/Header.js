import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1>COVID-19 TRACKER</h1>
      <h2>Global and Country Specific Cases</h2>
      <p>
        <em>(Select a country from below)</em>
      </p>
    </div>
  );
}
