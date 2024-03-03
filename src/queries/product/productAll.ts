import { useQuery } from '@tanstack/react-query';
import API from '../../api/api';

const useGetProductAll = () => {
  const url = '/products/';
  return useQuery({
    queryKey: ['products', 'all'],
    queryFn: () => API.get(url),
  });
};

export default useGetProductAll;
