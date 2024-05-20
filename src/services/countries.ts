import axios from 'axios';
import { Country } from '../types';

export default async function getCountries(): Promise<Country[]> {
  const { data } = await axios.get(`https://restcountries.com/v3.1/all`);

  return data;
}
