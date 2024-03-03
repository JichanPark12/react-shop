import { useSuspenseQuery } from '@tanstack/react-query';
import API from '../../api/api';

const useGetProductById = <T>(id: string) => {
  const url = `/products/${id}`;
  return useSuspenseQuery<T>({
    queryKey: ['product', id],
    queryFn: () => API.get(url),
  });
};

export default useGetProductById;
