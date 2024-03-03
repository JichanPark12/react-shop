import { useState } from 'react';
import { Cart } from '../../interface/cart/cart';
import { Product } from '../../interface/product/productInterface';
import useGetProductById from '../../queries/product/productByIdQueries';
import QuantityControl from '../utils/QuantityControl';
import { useRecoilState } from 'recoil';
import { cartListState } from '../../recoil/cart/atoms';
import { removeCart, updateCart } from '../../utils/cart';
import localStorageKey from '../../constants/key';
import CartCheckBox from './CartCheckBox';
import RemoveButton from '../buttons/RemoveButton';

interface Props {
  cart: Cart;
}
const CartProductCard = ({ cart }: Props) => {
  const { id, quantity: initQuantity, isChecked } = cart;
  const { data: product } = useGetProductById<Product>(id);
  const [cartList, setCartList] = useRecoilState<Map<string, Cart>>(cartListState);
  const [quantity, setQuantity] = useState(initQuantity);

  const handleClickCount = (num: number) => {
    const newCartList =
      num === 0 ? removeCart(cartList, id) : updateCart(cartList, id, num);
    if (!newCartList) return;

    setCartList(newCartList);
    setQuantity(num);

    localStorage.setItem(
      localStorageKey.cartList,
      JSON.stringify(Object.fromEntries(newCartList))
    );
  };

  return (
    <div className="flex mb-5">
      <div className="mr-5 rounded-sm">
        <figure className="w-56 h-56 bg-white flex items-center justify-center rounded-xl">
          <img className="h-4/5 w-4/5" src={product.image} />
        </figure>
      </div>
      <div className="flex flex-col justify-evenly card-body ">
        <div className="flex justify-between">
          <p>{product.title}</p>
          <CartCheckBox id={id} isChecked={isChecked}></CartCheckBox>
        </div>
        <span>{`$${(product.price * quantity).toLocaleString()} ($${
          product.price
        })`}</span>
        <div className="flex justify-between">
          <QuantityControl
            handleClickCounter={handleClickCount}
            quantity={initQuantity}
            minValue={0}
          ></QuantityControl>
          <RemoveButton id={id}></RemoveButton>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
