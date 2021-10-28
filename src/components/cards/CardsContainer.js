import styles from "./cardsContainer.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAsync } from "../../redux/countrySlice";

export default function CardsContainer() {
  const dispatch = useDispatch();
  const countryValue = useSelector((state) => state.country.countryValue);
  const data = useSelector((state) => state.country.data);

  console.log(data);

  useEffect(() => {
    dispatch(getDataAsync(countryValue));
  }, [dispatch, countryValue]);

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
