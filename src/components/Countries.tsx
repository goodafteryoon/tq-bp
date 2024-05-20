import { useCountries } from '../hooks/useCountries';

const Countries = () => {
  const { data: countries, isLoading, isError } = useCountries();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something BAD occured</p>;
  }

  if (!countries) {
    return <p>No data</p>;
  }

  return (
    <div>
      {countries.map((country, index: number) => {
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
