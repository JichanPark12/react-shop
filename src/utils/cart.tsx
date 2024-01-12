import config from '../constants/config';
import { Cart } from '../interface/cart/cart';

export const addCart = (
  cartList: Map<string, Cart>,
  productId: string,
  quantity: number
): Map<string, Cart> => {
  const newCartList = new Map<string, Cart>(cartList);
  const cartData = newCartList.get(productId);
  if (cartData) {
    const updatedQuantity = cartData.quantity + quantity;
    const newQuantity =
      updatedQuantity > config.maxProductCount ? config.maxProductCount : updatedQuantity;

    const updatedCartData = {
      ...cartData,
      quantity: newQuantity,
    };

    newCartList.set(productId, updatedCartData);
    return newCartList;
  }
  const newCartData: Cart = {
    id: productId,
    quantity: quantity,
    isChecked: true,
  };
  newCartList.set(productId, newCartData);
  return newCartList;
};

export const updateCart = (
  cartList: Map<string, Cart>,
  productId: string,
  quantity?: number,
  isChecked?: boolean
): Map<string, Cart> | undefined => {
  const newCartList = new Map<string, Cart>(cartList);
  const cartData = newCartList.get(productId);
  if (!cartData) return;

  const updatedCartData = {
    ...cartData,
    quantity: quantity !== undefined ? quantity : cartData.quantity,
    isChecked: isChecked !== undefined ? isChecked : cartData.isChecked,
  };

  newCartList.set(productId, updatedCartData);

  return newCartList;
};

export const removeCart = (cartList: Map<string, Cart>, productId: string) => {
  const newCartList = new Map<string, Cart>(cartList);
  newCartList.delete(productId);
  return newCartList;
};

