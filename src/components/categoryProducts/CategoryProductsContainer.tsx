import { useParams } from 'react-router-dom';
import isHasData from '../../utils/util';
import NotFound from '../error/NotFound';
import { useGetCategories } from '../../queries/category/categoryQueries';
import CategoryProducts from './CategoryProducts';
import { Suspense } from 'react';
import Position from '../utils/Position';
import CategoryProductTitle from './CategoryProductTitle';
import Skeleton from '../skeleton/skeleton';

const CategoryProductsContainer = () => {
  const { id: category } = useParams();
  const { data = [] } = useGetCategories<Array<string>>();

  if (!isHasData(data, category) || category === undefined) {
    return <NotFound></NotFound>;
  }
  return (
    <div className=" dark:text-gray-400 dark:bg-darkBlueColor max-w-screen-xl2 m-auto pr-3 pl-3">
      <article className="mb-28">
        <Position position={['Home', category]}></Position>
        <CategoryProductTitle category={category}></CategoryProductTitle>
        <Suspense fallback={<Skeleton />}>
          <CategoryProducts category={category}></CategoryProducts>
        </Suspense>
      </article>
    </div>
  );
};

export default CategoryProductsContainer;
