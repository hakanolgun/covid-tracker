import { configureStore } from "@reduxjs/toolkit";
import CountryReducer from "./countrySlice";

export const store = configureStore({
  reducer: {
    country: CountryReducer,
  },
});
