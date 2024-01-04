import { atom } from 'recoil';
import localStorageKey from '../../constants/key';
import { Cart } from '../../interface/cart/cart';

const cartListData = localStorage.getItem(localStorageKey.cartList);
const cartList: Map<string, Cart> = cartListData
  ? new Map(Object.entries(JSON.parse(cartListData)))
  : new Map();

export const cartListState = atom({
  key: 'cartListState',
  default: cartList,
});
