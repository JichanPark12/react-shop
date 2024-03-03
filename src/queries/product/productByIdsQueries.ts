import { useQueries } from '@tanstack/react-query';
import API from '../../api/api';

const useGetProductByIds = (ids: string[]) => {
  const url = `/products/`;
  return useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ['product', id],
        queryFn: () => API.get(`${url + id}`),
      };
    }),
  });
};

export default useGetProductByIds;
