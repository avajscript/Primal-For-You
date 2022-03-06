import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Cart from "./Cart";
const NavbarElem = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid black;
  position: relative;
  background-color: #e0cece;
  position: relative;
  //overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 60px;
  align-items: center;
  padding: 0 20px;
  .logo {
    height: 58px;
    @media screen and (max-width: 360px) {
      display: none;
    }
  }
`;

const Header = styled.h1`
  font-size: 2.5rem;
  line-height: 100%;
  text-align: center;

  @media screen and (max-width: 750px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 440px) {
    font-size: 1.2rem;
  }
`;

export default function Navbar(props) {
  return (
    <NavbarElem>
      <img className="logo" src={require("../Data/Images/logos/logo.png")} />
      <Link className="link" to="/">
        <Header> PRIMAL FOR YOU </Header>
      </Link>
      <Cart
        cart={props.cart}
        open={props.open}
        toggleOpen={props.toggleOpen}
        cartValue={props.cartValue}
        deleteItem={props.deleteItem}
        incrementItem={props.incrementItem}
        decrementItem={props.decrementItem}
      />
    </NavbarElem>
  );
}
