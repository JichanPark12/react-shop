import { useRecoilValue } from 'recoil';
import { filterCartList } from '../../recoil/cart/selectors';
import useGetProductByIds from '../../queries/product/productByIdsQueries';
import BuyButton from '../buttons/BuyButton';
import { useState } from 'react';
import BuyModal from '../modal/BuyModal';

const CartProductBuy = () => {
  const [modal, setModal] = useState<boolean>(false);
  const checkFilterCartList = useRecoilValue(filterCartList);
  const ids: string[] = checkFilterCartList.map((cart) => cart.id);
  const productList = useGetProductByIds(ids);

  const totalPrice = productList.reduce(
    (acc, cur, idx) => (acc += cur.data.price * checkFilterCartList[idx].quantity),
    0
  );
  return (
    <div className="flex">
      <div className="mr-5">{`totalPrice $${totalPrice.toLocaleString()}`}</div>
      <BuyButton setModal={setModal}></BuyButton>

      {modal && <BuyModal setModal={setModal}></BuyModal>}
    </div>
  );
};

export default CartProductBuy;
