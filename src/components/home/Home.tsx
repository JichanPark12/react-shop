import { Suspense } from 'react';
import { useGetCategories } from '../../queries/category/categoryQueries';
import CategoryProducts from '../categoryProducts/CategoryProducts';

import NotFound from '../error/NotFound';
import CategoryCarousel from '../utils/CategoryCarousel';
import CategoryProductTitle from '../categoryProducts/CategoryProductTitle';
import Skeleton from '../skeleton/skeleton';
import { ErrorBoundary } from 'react-error-boundary';

const Home = () => {
  const { data = [] } = useGetCategories<Array<string>>();
  if (data.length === 0) {
    return <NotFound></NotFound>;
  }

  return (
    <div className="">
      <CategoryCarousel></CategoryCarousel>

      <div className="max-w-screen-xl2 m-auto">
        {data.map((category: string) => (
          <div className="mt-10" key={category}>
            <CategoryProductTitle category={category}></CategoryProductTitle>
            <ErrorBoundary fallback={<NotFound></NotFound>}>
              <Suspense fallback={<Skeleton />}>
                <CategoryProducts category={category} limit={4}></CategoryProducts>
              </Suspense>
            </ErrorBoundary>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
