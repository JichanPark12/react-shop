import { useRecoilValue } from 'recoil';
import { cartListState } from '../../recoil/cart/atoms';
import { Cart } from '../../interface/cart/cart';
import CartProductCard from './CartProductCard';
import CartProductBuy from './CartProductBuy';
import { Suspense } from 'react';
import CategoryProductsLoading from '../categoryProducts/CategoryProductsLoading';

const CartContainer = () => {
  const cartList = useRecoilValue(cartListState);

  return (
    <Suspense fallback={<CategoryProductsLoading />}>
      <div className="flex">
        <div>
          {[...cartList.values()].map((cart: Cart) => (
            <CartProductCard key={cart.id} cart={cart}></CartProductCard>
          ))}
        </div>

        <CartProductBuy></CartProductBuy>
      </div>
    </Suspense>
  );
};

export default CartContainer;
