import { atom } from 'recoil';
import localStorageKey from '../../constants/key';

const localData = localStorage.getItem(localStorageKey.isDark);

localData === null && localStorage.setItem(localStorageKey.isDark, 'false');

const isDark: boolean = localData ? JSON.parse(localData) : false;

export const isDarkState = atom({
  key: 'isDarkState',
  default: isDark,
});
