import { useRecoilValue } from 'recoil';
import { cartListState } from '../../recoil/cart/atoms';
import { Cart } from '../../interface/cart/cart';
import CartProductCard from './CartProductCard';
import CartProductBuy from './CartProductBuy';
import { Suspense } from 'react';

import Position from '../utils/Position';
import Skeleton from '../skeleton/skeleton';

const CartContainer = () => {
  const cartList = useRecoilValue(cartListState);

  return (
    <div className="max-w-screen-xl2 m-auto pr-3 pl-3">
      <Position position={['Home', 'Cart']}></Position>
      <Suspense fallback={<Skeleton />}>
        <div className="flex w-full justify-between mt-10">
          <div>
            {[...cartList.values()].map((cart: Cart) => (
              <CartProductCard key={cart.id} cart={cart}></CartProductCard>
            ))}
          </div>

          <CartProductBuy></CartProductBuy>
        </div>
      </Suspense>
    </div>
  );
};

export default CartContainer;
