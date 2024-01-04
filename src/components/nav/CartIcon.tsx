import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartTotalQuantityState } from '../../recoil/cart/selectors';

const CartIcon = () => {
  const totalQuantity = useRecoilValue(cartTotalQuantityState);

  return (
    <Link to={'/cart'} className="btn btn-ghost w-10 ml-1">
      <span className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-darkBlueColor dark:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
        <span className="inline-flex items-center justify-center absolute bottom-4 left-2 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 ">
          {totalQuantity >= 100 ? '99+' : totalQuantity}
        </span>
      </span>
    </Link>
  );
};

export default CartIcon;
