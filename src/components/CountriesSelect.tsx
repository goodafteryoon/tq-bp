import { useCountries } from '../hooks/useCountries';

const CountriesSelect = () => {
  const { data: country } = useCountries(); // 이제 한 줄로 api 로직을 추가할 수 있다

  return (
    <div>
      <p>Select the country </p>
    </div>
  );
};

export default CountriesSelect;
