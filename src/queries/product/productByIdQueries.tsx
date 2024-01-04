import { useQuery } from '@tanstack/react-query';
import API from '../../api/api';

const useGetProductById = <T,>(id: string, options?) => {
  const url = `/products/${id}`;
  return useQuery<T>({
    queryKey: ['product', id],
    queryFn: () => API.get(url),
    ...options,
  });
};

export default useGetProductById;
