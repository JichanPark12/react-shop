import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartListState } from '../../recoil/cart/atoms';
import localStorageKey from '../../constants/key';
import { filterIsNotCheckedCartList } from '../../recoil/cart/selectors';
import { Cart } from '../../interface/cart/cart';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuyModal = ({ setModal }: Props) => {
  const setCartList = useSetRecoilState(cartListState);
  const checkIsNotCartList = useRecoilValue(filterIsNotCheckedCartList);
  const handleClickClose = () => {
    setModal(false);
  };
  const handleClickBuy = () => {
    const newCartList = new Map();
    checkIsNotCartList.forEach((cart: Cart) => {
      newCartList.set(cart.id, cart);
    });
    setModal(false);
    setCartList(newCartList);
    localStorage.setItem(
      localStorageKey.cartList,
      JSON.stringify(Object.fromEntries(newCartList))
    );
  };
  return (
    <dialog className="modal modal-open bg-gray-500">
      <div className="modal-box dark:bg-darkBlueColor">
        <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
        <p className="py-4">선택된 상품들이 장바구니에서 제거됩니다.</p>
        <div className="modal-action">
          <button className="btn" onClick={handleClickBuy}>
            네
          </button>
          <button className="btn" onClick={handleClickClose}>
            아니오
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default BuyModal;
