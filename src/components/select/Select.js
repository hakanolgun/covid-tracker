import styles from "./select.module.css";

import { useSelector, useDispatch } from "react-redux";
import { selectCountry } from "../../redux/countrySlice";

export default function Select() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countries);

  return (
    <div className={styles.selectContainer}>
      <select
        name="countries"
        id="countries"
        defaultValue=""
        onChange={(e) => dispatch(selectCountry(e.target.value))}
      >
        <option value="" key="globalitem">
          Global
        </option>
        {countries.map((item) => (
          <option value={item.name} key={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
