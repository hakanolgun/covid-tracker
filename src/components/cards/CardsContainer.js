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
            <p>Infected</p>
            <p>{data.confirmed.value}</p>
            <p>Last Updated:</p>
            <p>{data.lastUpdate}</p>
            <p>Number of active cases of Covid-19</p>
          </div>
          <div className={styles.cardDiv}>
            <p>Recovered</p>
            <p>{data.recovered.value}</p>
            <p>Last Updated:</p>
            <p>{data.lastUpdate}</p>
            <p>Number of active cases of Covid-19</p>
          </div>
          <div className={styles.cardDiv}>
            <p>Deaths</p>
            <p>{data.deaths.value}</p>
            <p>Last Updated:</p>
            <p>{data.lastUpdate}</p>
            <p>Number of active cases of Covid-19</p>
          </div>
          <div className={styles.cardDiv}>
            <p>Active</p>
            <p>41,819,232</p>
            <p>Last Updated:</p>
            <p>{data.lastUpdate}</p>
            <p>Number of active cases of Covid-19</p>
          </div>
        </div>
      )}
    </div>
  );
}
