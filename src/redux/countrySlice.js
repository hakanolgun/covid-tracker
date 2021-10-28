import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import countries from "./data/countries";

// fetch işleminde state'de bulunan bir veriyi kullanamak için
// onu arrow function içine parametre olarak aldım
// sonra kullanacağım komponentt üzerinden vereceğim

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

export const getGlobalDays = createAsyncThunk(
  "country/getGlobalDays",
  async () => {
    const res = await fetch(`https://covid19.mathdro.id/api/daily`);
    return await res.json();
  }
);

export const CountrySlice = createSlice({
  name: "country",
  initialState: {
    countryValue: "",
    countries,
    isLoading: false,
    data: null,
    isGlobal: false,
    globalData: null,
  },
  reducers: {
    selectCountry: (state, action) => {
      state.countryValue = action.payload;
    },
  },
  extraReducers: {
    // get Country Data
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
    // get Global Daily
    [getGlobalDays.pending]: (state, action) => {
      state.isGlobal = true;
    },
    [getGlobalDays.fulfilled]: (state, action) => {
      state.globalData = action.payload;
      state.isGlobal = false;
    },
    [getGlobalDays.rejected]: (state, action) => {
      state.isGlobal = false;
    },
  },
});

export const { selectCountry } = CountrySlice.actions;
export default CountrySlice.reducer;
