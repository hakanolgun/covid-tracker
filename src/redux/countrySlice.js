import { createSlice } from "@reduxjs/toolkit";
import countries from "./data/countries";

export const CountrySlice = createSlice({
  name: "country",
  initialState: {
    countryValue: "",
    countries,
  },
  reducers: {
    selectCountry: (state, action) => {
      state.countryValue = action.payload;
    },
  },
});

export const { selectCountry } = CountrySlice.actions;
export default CountrySlice.reducer;
