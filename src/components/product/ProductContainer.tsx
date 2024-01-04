import { Suspense } from 'react';
import ProductCard from './ProductCard';
import CategoryProductsLoading from '../categoryProducts/CategoryProductsLoading';
import { useParams } from 'react-router-dom';
import NotFound from '../error/NotFound';

const ProductContainer = () => {
  const { id: productId } = useParams();
  if (productId === undefined) {
    return <NotFound></NotFound>;
  }
  return (
    <Suspense fallback={<CategoryProductsLoading />}>
      <ProductCard productId={productId}></ProductCard>
    </Suspense>
  );
};
export default ProductContainer;
