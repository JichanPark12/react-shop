import { useState } from 'react';
import { Cart } from '../../interface/cart/cart';
import { Product } from '../../interface/product/productInterface';
import useGetProductById from '../../queries/product/productByIdQueries';
import QuantityControl from '../product/QuantityControl';
import { useRecoilState } from 'recoil';
import { cartListState } from '../../recoil/cart/atoms';
import { removeCart, updateCart } from '../../utils/cart';
import localStorageKey from '../../constants/key';

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

  const handleClickDeleteBtn = () => {
    const newCartList = removeCart(cartList, id);
    setCartList(newCartList);
    localStorage.setItem(
      localStorageKey.cartList,
      JSON.stringify(Object.fromEntries(newCartList))
    );
  };

  const handleClickCheckBox = () => {
    const newCartList = updateCart(cartList, id, undefined, !isChecked);

    if (!newCartList) return;
    setCartList(newCartList);
    localStorage.setItem(
      localStorageKey.cartList,
      JSON.stringify(Object.fromEntries(newCartList))
    );
  };
  if (!product) return;
  return (
    <div className="flex ">
      <div>
        <figure className=" w-56 h-56">
          <img className="h-full w-full" src={product.image} />
        </figure>
      </div>
      <div className="flex flex-col justify-evenly w-[650px]">
        <div className="flex justify-between">
          <p>{product.title}</p>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleClickCheckBox}
            className="checkbox dark:bg-gray-400 ml-20"
          />
        </div>
        <span>{`$${(product.price * quantity).toLocaleString()} ($${
          product.price
        })`}</span>
        <span></span>
        <div className="flex justify-between">
          <QuantityControl
            handleClickCounter={handleClickCount}
            quantity={initQuantity}
            minValue={0}
          ></QuantityControl>
          <button className="btn btn-primary" onClick={handleClickDeleteBtn}>
            상품 제거
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
