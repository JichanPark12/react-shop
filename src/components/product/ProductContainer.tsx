import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import ProductContent from './ProductContent';
import Skeleton from '../skeleton/skeleton';
import { ErrorBoundary } from 'react-error-boundary';
import NotFound from '../error/NotFound';

const ProductContainer = () => {
  const { id: productId = '1' } = useParams();

  return (
    <div className="max-w-screen-xl2 m-auto pr-3 pl-3">
      <ErrorBoundary fallback={<NotFound></NotFound>}>
        <Suspense fallback={<Skeleton />}>
          <ProductContent productId={productId}></ProductContent>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
export default ProductContainer;
