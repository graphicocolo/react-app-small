import { memo } from "react";

type CartItemProps = {
  item: string;
};

const CartItem = memo(({ item }: CartItemProps) => {
  return <li>{item}</li>;
});

export default CartItem;