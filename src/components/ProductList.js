import React from 'react'
import ProductListItem from './ProductListItem'

const ProductList = ({ loading, products }) => {
	return loading ? (
		<p>loading...</p>
	) : (
		products && (
			<div className="productlist">
				{products.map((product, key) => {
					return <ProductListItem product={product} key={key} />
				})}
			</div>
		)
	)
}

export default ProductList
