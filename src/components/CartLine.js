import React from "react";
import styled from "styled-components";

const CartLineElem = styled.li`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  img {
    height: 100%;
    width: 50px;
    object-fit: cover;
  }
  @media screen and (max-width: 410px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-basis: 65%;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-basis: 35%;
  justify-content: flex-end;
  gap: 1rem;
  @media screen and (max-width: 410px) {
    justify-content: center;
  }
`;

const Amount = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-right: 2rem;
`;

const Icon = styled.div`
  background-color: #e0cece;
  height: 20px;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border: 1px solid grey;
  }
  p {
    padding-left: 5px;
    padding-right: 5px;
  }
`;
const AmountBox = styled.div`
  border: 1px solid #e0cece;
  width: 20px;
  height: 20px;
  text-align: center;
`;
export default function CartLine(props) {
  const [amount, setAmount] = React.useState(5);
  const totalValue = props.price * props.quantity;
  return (
    <CartLineElem>
      <LeftSide>
        <img src={props.image} />
        <div>
          <p className="bold">{props.title} </p>
          <p>${props.price} ea </p>
        </div>
        <p className="bold">
          {" "}
          ({props.quantity}) - {props.weight}{" "}
        </p>
      </LeftSide>
      <RightSide>
        <Amount>
          <Icon onClick={() => props.decrementItem(props.code)}>
            <p>- </p>
          </Icon>
          <AmountBox>
            <p className="bold">{props.quantity} </p>
          </AmountBox>
          <Icon onClick={() => props.incrementItem(props.code)}>
            <p> + </p>
          </Icon>
        </Amount>
        <p className="bold">${totalValue.toFixed(2)} </p>
        <Icon onClick={() => props.deleteItem(props.code)}>
          <p> x </p>
        </Icon>
      </RightSide>
    </CartLineElem>
  );
}
