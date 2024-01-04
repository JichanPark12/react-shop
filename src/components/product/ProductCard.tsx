import useGetProductById from '../../queries/product/productByIdQueries';
import NotFound from '../error/NotFound';
import { Product } from '../../interface/product/productInterface';
import ProductRating from './ProductRating';
import { useState } from 'react';
import QuantityControl from './QuantityControl';
import { ClickCounterHandler } from '../../interface/product/quantityFuncInterface';
import AddCartButton from '../buttons/AddCartButton';

interface Props {
  productId: string;
}

const ProductCard = ({ productId }: Props) => {
  const { data: product } = useGetProductById<Product | string>(productId);
  const [quantity, setQuantity] = useState<number>(1);
  if (typeof product === 'string' || product === undefined) {
    return <NotFound></NotFound>;
  }
  const handleClickCounter: ClickCounterHandler = (num: number) => {
    setQuantity(num);
  };

  return (
    <div className="dark:bg-darkBlueColor flex">
      <figure className="flex-shrink-0 bg-white w-80 h-80 rounded-2xl p-6">
        <img src={product.image} alt={product.title} className="w-full h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <ProductRating rating={product.rating}></ProductRating>
        <div className="mt-3 flex items-center">
          <div className="text-3xl mr-8">{`$${product.price}`}</div>
          <QuantityControl
            handleClickCounter={handleClickCounter}
            minValue={1}
          ></QuantityControl>
          <div className="text-3xl mr-8 ml-5">{`totalPrice $${(
            product.price * quantity
          ).toLocaleString()}`}</div>
        </div>

        <div className="justify-start mt-3">
          <button className="btn btn-primary mr-5">구매하기</button>
          <AddCartButton productId={product.id} quantity={quantity}></AddCartButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
