import React from "react";
import styled from "styled-components";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
const CartCont = styled.div`
  position: relative;
`;
export default function Cart(props) {
  return (
    <CartCont>
      <CartIcon
        cartValue={props.cartValue}
        open={props.open}
        toggleOpen={props.toggleOpen}
      />

      <CartDropdown
        cart={props.cart}
        cartValue={props.cartValue}
        open={props.open}
        deleteItem={props.deleteItem}
        incrementItem={props.incrementItem}
        decrementItem={props.decrementItem}
      />
    </CartCont>
  );
}
