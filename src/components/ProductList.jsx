import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => (
	<List>
		{products.map((product) => (
			<ProductCard key={product.id} product={product} addToCart={addToCart} />
		))}
	</List>
);

export default ProductList;

const List = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`;
