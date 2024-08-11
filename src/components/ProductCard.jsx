import React from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} успешно добавлен в корзину!`);
  };

  return (
    <Card>
      <img src={product.image} alt={product.name} width="100" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;
