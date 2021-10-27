import styles from "./cardsContainer.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CardsContainer() {
  const countryValue = useSelector((state) => state.country.countryValue);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (countryValue === "") {
        await fetch(`https://covid19.mathdro.id/api`)
          .then((response) => response.json())
          .then((newData) => {
            setData(newData);
          });
      } else {
        await fetch(`https://covid19.mathdro.id/api/countries/${countryValue}`)
          .then((response) => response.json())
          .then((newData) => {
            setData(newData);
          });
      }
    }
    fetchData();
  }, [countryValue]);

  return (
    <div>
      {data !== null && (
        <div className={styles.cardsContainer}>
          <div className={styles.cardDiv}>
            <p className={styles.title}>Infected</p>
            <p className={styles.number}>
              {data.confirmed.value
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </p>
            <p>Last Updated:</p>
            <em>{new Date(data.lastUpdate).toLocaleString()}</em>
          </div>
          <div className={styles.cardDiv}>
            <p className={styles.title}>Recovered</p>
            <p className={styles.number}>
              {data.recovered.value
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </p>
            <p>Last Updated:</p>
            <em>{new Date(data.lastUpdate).toLocaleString()}</em>
          </div>
          <div className={styles.cardDiv}>
            <p className={styles.title}>Deaths</p>
            <p className={styles.number}>
              {data.deaths.value
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </p>
            <p>Last Updated:</p>
            <em>{new Date(data.lastUpdate).toLocaleString()}</em>
          </div>
          <div className={styles.cardDiv}>
            <p className={styles.title}>Active</p>
            <p className={styles.number}>
              {(data.confirmed.value - data.recovered.value - data.deaths.value)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </p>
            <p>Last Updated:</p>
            <em>{new Date(data.lastUpdate).toLocaleString()}</em>
          </div>
        </div>
      )}
    </div>
  );
}
