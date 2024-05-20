import { useQuery } from '@tanstack/react-query';

import { COUNTRY_QUERY_KEY } from '../constants';
import getCountries from '../services/countries';

export const useCountries = () => {
  return useQuery({
    queryKey: [COUNTRY_QUERY_KEY],
    queryFn: getCountries,
  });
};
