import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import countries from "./data/countries";

export const getDataAsync = createAsyncThunk(
  "country/getDataAsync",
  async (countryValue) => {
    if (countryValue === "") {
      const res = await fetch(`https://covid19.mathdro.id/api`);
      return await res.json();
    } else {
      const res = await fetch(
        `https://covid19.mathdro.id/api/countries/${countryValue}`
      );
      return await res.json();
    }
  }
);

export const CountrySlice = createSlice({
  name: "country",
  initialState: {
    countryValue: "",
    countries,
    isLoading: false,
    data: null,
  },
  reducers: {
    selectCountry: (state, action) => {
      state.countryValue = action.payload;
    },
  },
  extraReducers: {
    [getDataAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getDataAsync.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },

    [getDataAsync.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { selectCountry } = CountrySlice.actions;
export default CountrySlice.reducer;
