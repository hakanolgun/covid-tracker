import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
export default function Graphics() {
  const storedata = useSelector((state) => state.country.data);

  return (
    <div>
      {storedata !== null && (
        <Bar
          data={{
            labels: ["infected", "recovered", "deaths", "active"],
            datasets: [
              {
                label: "current state in selected country",
                data: [
                  storedata.confirmed.value,
                  storedata.recovered.value,
                  storedata.deaths.value,
                  storedata.confirmed.value -
                    storedata.recovered.value -
                    storedata.deaths.value,
                ],
                backgroundColor: ["#afd6fc", "#dcf5e1", "#d8aaaa", "#f3e0c8"],
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
