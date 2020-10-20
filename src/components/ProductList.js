import React from 'react'
import ProductListItem from './ProductListItem'

const ProductList = ({ products, page, productsByPage }) => {
	const firstProductShowing = page * productsByPage - productsByPage
	const lastProductShowing = page * productsByPage - 1

	return products ? (
		<div className="productlist">
			{products.map((product, key) => {
				if( key > firstProductShowing && key < lastProductShowing ) {
					return <ProductListItem product={product} key={key} />
				}
				return ''
			})}
		</div>
	) : (
		''
	)
}

export default ProductList
