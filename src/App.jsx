import React from "react";
import styled from "styled-components";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CartManager from "./components/CartManager";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const products = [
    { id: 1, name: "Клубника", price: 5, image: "src/assets/images/1.png" },
    { id: 2, name: "Красный лук", price: 3, image: "src/assets/images/2.png" },
    { id: 3, name: "Помидор", price: 1, image: "src/assets/images/3.png" },
    { id: 4, name: "Баклажан", price: 4, image: "src/assets/images/4.png" },
    { id: 5, name: "Брокколи", price: 8, image: "src/assets/images/5.png" },
    { id: 6, name: "Картошка", price: 1, image: "src/assets/images/6.png" },
  ];

  return (
    <Container>
      <Header>ORGANIC PRODUCTS</Header>
      <CartManager>
        {({ cartItems, addToCart, updateQuantity, totalPrice }) => (
          <>
            <ProductList products={products} addToCart={addToCart} />
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              totalPrice={totalPrice}
            />
            <ToastContainer /> 
          </>
        )}
      </CartManager>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
