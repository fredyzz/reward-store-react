import React from 'react'

const ProductListItem = ({ product }) => {
	return (
		<div key={product.id} className="productListItem">
			<div className="cover">
				<div>
					<span>{product.cost}</span>
					<img src={require('../assets/images/coin.svg')} alt="" />
				</div>

				<button>Redeem now</button>
			</div>
			<div className="back">
				<img src={product.img.url} alt={product.name} />
				<hr />
				<p>{product.category}</p>
				<h4>{product.name}</h4>
			</div>
		</div>
	)
}

export default ProductListItem
