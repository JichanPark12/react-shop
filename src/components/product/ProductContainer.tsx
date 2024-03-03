import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import ProductContent from './ProductContent';
import Skeleton from '../skeleton/skeleton';

const ProductContainer = () => {
  const { id: productId = '1' } = useParams();

  return (
    <div className="max-w-screen-xl2 m-auto pr-3 pl-3">
      <Suspense fallback={<Skeleton />}>
        <ProductContent productId={productId}></ProductContent>
      </Suspense>
    </div>
  );
};
export default ProductContainer;
