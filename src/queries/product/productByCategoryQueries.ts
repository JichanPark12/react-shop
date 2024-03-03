import { useSuspenseQuery } from '@tanstack/react-query';
import API from '../../api/api';

const useGetProductByCategory = (category: string) => {
  const url = `/products/category/${category}`;
  return useSuspenseQuery({
    queryKey: ['shopCategories', category],
    queryFn: () => API.get(url),
  });
};

export default useGetProductByCategory;
