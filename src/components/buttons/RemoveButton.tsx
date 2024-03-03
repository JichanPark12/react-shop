import { useRecoilState } from 'recoil';
import { cartListState } from '../../recoil/cart/atoms';
import { removeCart } from '../../utils/cart';
import localStorageKey from '../../constants/key';

interface Props {
  id: string;
}

const RemoveButton = ({ id }: Props) => {
  const [cartList, setCartList] = useRecoilState(cartListState);
  const handleClick = () => {
    const newCartList = removeCart(cartList, id);
    setCartList(newCartList);
    localStorage.setItem(
      localStorageKey.cartList,
      JSON.stringify(Object.fromEntries(newCartList))
    );
  };
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      상품 제거
    </button>
  );
};

export default RemoveButton;
