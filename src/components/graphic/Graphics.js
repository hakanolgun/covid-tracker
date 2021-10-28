import styles from "./general.module.css";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

export default function Graphics() {
  const storedata = useSelector((state) => state.country.data);

  return (
    <div className={styles.generalContainer}>
      {storedata !== null && (
        <Bar
          data={{
            labels: ["infected", "deaths", "active"],
            datasets: [
              {
                label: "current state in selected country",
                data: [
                  storedata.confirmed.value,
                  storedata.deaths.value,
                  storedata.confirmed.value - storedata.deaths.value,
                ],
                backgroundColor: ["#afd6fc", "#b65858", "#f3e0c8"],
              },
            ],
          }}
          width={300}
          height={300}
          options={{ maintainAspectRatio: false }}
        />
      )}
    </div>
  );
}
