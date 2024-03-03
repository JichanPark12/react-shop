import { useRecoilState } from 'recoil';
import localStorageKey from '../../constants/key';
import { updateCart } from '../../utils/cart';
import { cartListState } from '../../recoil/cart/atoms';
import { Cart } from '../../interface/cart/cart';

interface Props {
  id: string;
  isChecked: boolean;
}

const CartCheckBox = ({ id, isChecked }: Props) => {
  const [cartList, setCartList] = useRecoilState<Map<string, Cart>>(cartListState);
  const handleClick = () => {
    const newCartList = updateCart(cartList, id, undefined, !isChecked);

    if (!newCartList) return;
    setCartList(newCartList);
    localStorage.setItem(
      localStorageKey.cartList,
      JSON.stringify(Object.fromEntries(newCartList))
    );
  };
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleClick}
      className="checkbox dark:bg-gray-400 ml-20"
    />
  );
};

export default CartCheckBox;
