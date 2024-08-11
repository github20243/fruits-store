import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const Cart = ({ cartItems, updateQuantity, totalPrice }) => {
	return (
		<CartContainer>
			<h2>Your Cart</h2>
			{cartItems.length > 0 ? (
				cartItems.map((item) => (
					<CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
				))
			) : (
				<p>Your cart is empty.</p>
			)}
			<TotalPrice>Total: ${totalPrice}</TotalPrice>
		</CartContainer>
	);
};

export default Cart;

const CartContainer = styled.div`
	border: 1px solid #ddd;
	padding: 20px;
	margin-top: 20px;
`;

const TotalPrice = styled.div`
	font-weight: bold;
	margin-top: 10px;
	text-align: right;
`;
