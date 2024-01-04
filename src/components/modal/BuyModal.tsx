import { useSetRecoilState } from 'recoil';
import { cartListState } from '../../recoil/cart/atoms';
import { Cart } from '../../interface/cart/cart';
import config from '../../constants/config';
import localStorageKey from '../../constants/key';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuyModal = ({ setModal }: Props) => {
  const setCartList = useSetRecoilState(cartListState);
  const handleClickClose = () => {
    setModal(false);
  };
  const handleClickBuy = () => {
    const newCartList = new Map<string, Cart>();
    setModal(false);
    setCartList(newCartList);
    localStorage.setItem(localStorageKey.cartList, '{}');
  };
  return (
    <dialog className="modal modal-open bg-gray-500">
      <div className="modal-box dark:bg-darkBlueColor">
        <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
        <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
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
