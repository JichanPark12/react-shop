import { selector } from 'recoil';
import { cartListState } from './atoms';

export const cartTotalQuantityState = selector({
  key: 'cartTotalQuantity',
  get: ({ get }) => {
    const list = get(cartListState);

    return [...list.values()].reduce((acc, cur) => (acc += cur.quantity), 0);
  },
});

export const filterCartList = selector({
  key: 'filterCartList',
  get: ({ get }) => {
    const list = get(cartListState);
    return [...list.values()].filter((li) => li.isChecked);
  },
});
