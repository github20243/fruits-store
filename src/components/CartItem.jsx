import React from "react";
import styled from "styled-components";

const CartItem = ({ item, updateQuantity }) => (
  <Item>
    <span>
      {item.name} ({item.quantity}x ${item.price})
    </span>
    <ButtonGroup>
      <MinusButton onClick={() => updateQuantity(item.id, -1)}>-</MinusButton>
      <PlusButton onClick={() => updateQuantity(item.id, 1)}>+</PlusButton>
    </ButtonGroup>
  </Item>
);

export default CartItem;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ButtonGroup = styled.span`
  display: flex;
`;

const BaseButton = styled.button`
  border: none;
  color: white;
  padding: 8px 12px;
  font-size: 16px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const MinusButton = styled(BaseButton)`
  background-color: #e74c3c; 
  
  &:hover {
    background-color: #c0392b;
  }
  
  &:active {
    background-color: #a93226;
  }
`;

const PlusButton = styled(BaseButton)`
  background-color: #4CAF50; 
  
  &:hover {
    background-color: #45a049;
  }
  
  &:active {
    background-color: #388e3c;
  }
`;
