import { useQuery } from '@tanstack/react-query';
import API from '../../api/api';
import { UseGetCategoriesOptions } from '../../interface/queriesInterface';

const useGetProductByCategory = (
  category: string,
  options?: UseGetCategoriesOptions
) => {
  const url = `/products/category/${category}`;
  return useQuery({
    queryKey: ['shopCategories', category],
    queryFn: () => API.get(url),
    ...options,
  });
};

export default useGetProductByCategory;
