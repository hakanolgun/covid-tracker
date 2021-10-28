import styles from "./general.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import { getGlobalDays } from "../../redux/countrySlice";

export default function LineChart() {
  const dispatch = useDispatch();
  const countryValue = useSelector((state) => state.country.countryValue);
  useEffect(() => {
    dispatch(getGlobalDays());
  }, [dispatch]);

  const globalData = useSelector((state) => state.country.globalData);

  let labels = [];
  let infected = [];
  let deaths = [];

  if (globalData !== null) {
    labels = globalData.map((item) => item.reportDate);
    infected = globalData.map((item) => item.totalConfirmed);
    deaths = globalData.map((item) => item.deaths.total);
  }

  return (
    <div className={styles.generalContainer}>
      {globalData !== null && countryValue === "" && (
        <Line
          data={{
            labels: labels,
            datasets: [
              {
                label: "infected",
                data: infected,
                backgroundColor: ["blue"],
              },
              {
                label: "deaths",
                data: deaths,
                backgroundColor: ["red"],
              },
            ],
          }}
          width={300}
          height={400}
          options={{
            legend: {
              display: true,
            },
            plugins: {
              title: {
                display: true,
                text: "Daily Global Cases",
              },
            },
            maintainAspectRatio: false,
          }}
        />
      )}
    </div>
  );
}
