export interface UseGetCategoriesOptions {
  enabled?: boolean;
  staleTime?: number | Infinity;
  refetchInterval?: number;
  refetchOnWindowFocus?: boolean;
  refetchOnMount?: boolean;
  refetchOnReconnect?: boolean;
  retry?: boolean;
  retryDelay?: number;
  retryOnMount?: boolean;
  select?: (data: any) => any;
}
