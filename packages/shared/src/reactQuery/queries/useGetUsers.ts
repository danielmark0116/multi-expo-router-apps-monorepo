import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from './QUERY_KEYS';

const getUsers = async () => {
  return [];
};

export const useGetUsers = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: getUsers,
  });
};
