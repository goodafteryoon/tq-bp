import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Country = {
  flag: string;
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
};

const Countries = () => {
  const {
    data: countriesResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['countries'],
    queryFn: async () => await axios.get(`https://restcountries.com/v3.1/all`),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something BAD occured</p>;
  }

  if (!countriesResponse) {
    return <p>No data</p>;
  }

  const { data: countires } = countriesResponse;

  return (
    <div>
      {countires.map((country: Country, index: number) => {
        if (index > 10) {
          return null;
        }

        return (
          <div key={country.flag}>
            <p>{country.name.common}</p>
            <img src={country.flags.png} alt={`${country.name.common}-flag`} />
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
