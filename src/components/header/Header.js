import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1>COVID-19</h1>
      <h2>Global and Country Wise Cases of Corona Virus</h2>
      <p>
        <em>For a Particular select a Country from below</em>
      </p>
    </div>
  );
}
