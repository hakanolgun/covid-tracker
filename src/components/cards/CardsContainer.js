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
            console.log("effectici data", newData);
          });
      } else {
        await fetch(`https://covid19.mathdro.id/api/countries/${countryValue}`)
          .then((response) => response.json())
          .then((newData) => {
            setData(newData);
            console.log("effectici data", newData);
          });
      }
    }
    fetchData();
  }, [countryValue]);

  console.log(data);

  return (
    <div>
      {data !== null && (
        <div className={styles.cardsContainer}>
          <div className={styles.cardDiv}>
            <p className={styles.title}>Infected</p>
            <p className={styles.number}>{data.confirmed.value}</p>
            <p>Last Updated:</p>
            <em>{data.lastUpdate}</em>
          </div>
          <div className={styles.cardDiv}>
            <p className={styles.title}>Recovered</p>
            <p className={styles.number}>{data.recovered.value}</p>
            <p>Last Updated:</p>
            <em>{data.lastUpdate}</em>
          </div>
          <div className={styles.cardDiv}>
            <p className={styles.title}>Deaths</p>
            <p className={styles.number}>{data.deaths.value}</p>
            <p>Last Updated:</p>
            <em>{data.lastUpdate}</em>
          </div>
          <div className={styles.cardDiv}>
            <p className={styles.title}>Active</p>
            <p className={styles.number}>
              {data.confirmed.value - data.recovered.value - data.deaths.value}
            </p>
            <p>Last Updated:</p>
            <em>{data.lastUpdate}</em>
          </div>
        </div>
      )}
    </div>
  );
}
