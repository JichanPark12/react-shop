import { useSuspenseQuery } from '@tanstack/react-query';
import API from '../../api/api';

export const useGetCategories = <T>() => {
  const url = '/products/categories';
  return useSuspenseQuery<T>({
    queryKey: ['shopCategories', url],
    queryFn: () => API.get(url),
  });
};
