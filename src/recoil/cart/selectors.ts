import { selector } from 'recoil';
import { cartListState } from './atoms';
import { Cart } from '../../interface/cart/cart';

export const cartTotalQuantityState = selector({
  key: 'cartTotalQuantity',
  get: ({ get }) => {
    const list = get(cartListState);

    return [...list.values()].reduce((acc, cur) => (acc += cur.quantity), 0);
  },
});

export const filterIsCheckedCartList = selector({
  key: 'filterIsCheckedCartList',
  get: ({ get }) => {
    const list = get(cartListState);
    return [...list.values()].filter((li) => li.isChecked);
  },
});

export const filterIsNotCheckedCartList = selector({
  key: 'filterIsNotCheckedCartList',
  get: ({ get }) => {
    const list = get(cartListState);
    return [...list.values()].filter((li) => !li.isChecked);
  },
});
