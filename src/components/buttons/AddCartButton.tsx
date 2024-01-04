import { useRecoilState } from 'recoil';
import { addCart } from '../../utils/cart';
import localStorageKey from '../../constants/key';
import { Cart } from '../../interface/cart/cart';
import { cartListState } from './../../recoil/cart/atoms';

interface Props {
  quantity: number;
  productId: string;
}

const AddCartButton = ({ quantity, productId }: Props) => {
  const [cartList, setCartList] = useRecoilState<Map<string, Cart>>(cartListState);
  const handleClick = () => {
    const newCartList = addCart(cartList, `${productId}`, quantity);

    setCartList(newCartList);

    localStorage.setItem(
      localStorageKey.cartList,
      JSON.stringify(Object.fromEntries(newCartList))
    );
  };

  return (
    <button className="btn btn-primary ml-5" onClick={handleClick}>
      장바구니에 담기
    </button>
  );
};

export default AddCartButton;
