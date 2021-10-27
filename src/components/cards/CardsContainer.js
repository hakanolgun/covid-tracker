import styles from "./cardsContainer.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CardsContainer() {
  const countryValue = useSelector((state) => state.country.countryValue);

  useEffect(() => {
    async function fetchData() {
      if (countryValue === "") {
        await fetch(`https://covid19.mathdro.id/api/}`)
          .then((response) => response.json())
          .then((data) => console.log(data));
      } else {
        await fetch(`https://covid19.mathdro.id/api/countries/${countryValue}`)
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
    }
    fetchData();
  }, [countryValue]);

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardDiv}>
        <p>Infected</p>
        <p>41,819,232</p>
        <p>Last Updated:</p>
        <p>Fri Sep 32 3232 324324 32423432</p>
        <p>Number of active cases of Covid-19</p>
      </div>
      <div className={styles.cardDiv}>
        <p>Infected</p>
        <p>41,819,232</p>
        <p>Last Updated:</p>
        <p>Fri Sep 32 3232 324324 32423432</p>
        <p>Number of active cases of Covid-19</p>
      </div>
      <div className={styles.cardDiv}>
        <p>Infected</p>
        <p>41,819,232</p>
        <p>Last Updated:</p>
        <p>Fri Sep 32 3232 324324 32423432</p>
        <p>Number of active cases of Covid-19</p>
      </div>
      <div className={styles.cardDiv}>
        <p>Infected</p>
        <p>41,819,232</p>
        <p>Last Updated:</p>
        <p>Fri Sep 32 3232 324324 32423432</p>
        <p>Number of active cases of Covid-19</p>
      </div>
    </div>
  );
}
