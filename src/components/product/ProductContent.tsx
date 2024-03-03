import { Product } from '../../interface/product/productInterface';
import useGetProductById from '../../queries/product/productByIdQueries';
import NotFound from '../error/NotFound';
import Position from '../utils/Position';
import ProductCard from './ProductCard';

interface Props {
  productId: string;
}
const ProductContent = ({ productId }: Props) => {
  const { data: product } = useGetProductById<Product | string>(productId);

  if (typeof product === 'string' || product === undefined) {
    return <NotFound></NotFound>;
  }
  return (
    <>
      <Position position={[product.category, product.title]}></Position>

      <ProductCard product={product}></ProductCard>
    </>
  );
};

export default ProductContent;
