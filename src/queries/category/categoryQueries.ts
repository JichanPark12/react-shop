import { useQuery } from '@tanstack/react-query';
import API from '../../api/api';

export const useGetCategories = <T>(options?) => {
  const url = '/products/categories';
  return useQuery<T>({
    queryKey: ['shopCategories', url],
    queryFn: () => API.get(url),
    ...options,
  });
};
