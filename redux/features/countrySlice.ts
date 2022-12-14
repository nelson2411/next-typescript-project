import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Country } from '../../types/countryTypes';

const allCountriesUrl = 'https://restcountries.com/v3.1/all';

export const countryApiSlice = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: allCountriesUrl }),
  endpoints: (builder) => ({
    fetchAllCountries: builder.query<Country[], void>({
      query: () => allCountriesUrl,
    }),
    fetchOneCountry: builder.query<Country, string>({
      query: (countryName) => `https://restcountries.com/v3.1/name/${countryName}`,
    }),
  }),
});

export const { useFetchAllCountriesQuery, useFetchOneCountryQuery } = countryApiSlice;
