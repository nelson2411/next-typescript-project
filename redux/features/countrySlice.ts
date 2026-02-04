import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Country } from '../../types/countryTypes';

const BASE_URL = 'https://restcountries.com/v3.1';
const FIELDS = 'name,capital,region,flags,population,area,languages,currencies,cca2';

export const countryApiSlice = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchAllCountries: builder.query<Country[], void>({
      query: () => `/all?fields=${FIELDS}`,
    }),
    fetchOneCountry: builder.query<Country[], string>({
      query: (countryName) => `/name/${countryName}?fields=${FIELDS}`,
    }),
  }),
});

export const { useFetchAllCountriesQuery, useFetchOneCountryQuery } = countryApiSlice;
