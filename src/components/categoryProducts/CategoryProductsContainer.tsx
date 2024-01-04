import { useParams } from 'react-router-dom';
import isHasData from '../../utils/util';
import NotFound from '../error/NotFound';
import { useGetCategories } from '../../queries/category/categoryQueries';
import CategoryProducts from './CategoryProducts';
import { Suspense } from 'react';
import CategoryProductsLoading from './CategoryProductsLoading';

const CategoryProductsContainer = () => {
  const { id: category } = useParams();
  const { data } = useGetCategories();

  if (!isHasData(data, category) || category === undefined) {
    return <NotFound></NotFound>;
  }
  return (
    <div className="p-4 dark:text-gray-500 flex justify-center dark:bg-darkBlueColor">
      <article className="max-w-screen-xl2 mb-28">
        <h2 className="text-center font-bold mx-auto text-4xl px-3">{category}</h2>
        <Suspense fallback={<CategoryProductsLoading />}>
          <CategoryProducts></CategoryProducts>
        </Suspense>
      </article>
    </div>
  );
};

export default CategoryProductsContainer;
