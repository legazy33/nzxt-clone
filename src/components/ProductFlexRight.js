import React from "react";
import styled from "styled-components";

function ProductFlexRight({ title, description, image }) {
	return (
		<ProdFlex>
			<div className="product-flex">
				<div className="image-description">
					<h2 className="title">{title}</h2>
					<p className="descript">{description}</p>
				</div>
				<div className="image-display">
					<img className="left-img" src={image}></img>
				</div>
			</div>
		</ProdFlex>
	);
}

const ProdFlex = styled.div`
	.product-flex {
		display: flex;
		gap: 40px;
		align-items: center;
		justify-content: center;
		margin-left: 10%;
		margin-right: 10%;
	}

	.left-img {
		height: 500px;
	}

	.title {
		font-size: 3rem;
		color: #313234;
	}

	.descript {
		padding-top: 30px;
		letter-spacing: 1px;
		width: 90%;
		line-height: 24px;
		font-weight: 400;
	}
`;

export default ProductFlexRight;
