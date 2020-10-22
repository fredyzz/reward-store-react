import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ProductListItem from './ProductListItem'
import Modal from '../assets/utils/Modal'
import ConfirmSwap from './ConfirmSwap'

const ProductList = ({ products, page, productsByPage }) => {
	const { showModal, setShowModal, selectedProduct } = useContext(AppContext)
	const firstProductShowing = page * productsByPage - productsByPage
	const lastProductShowing = page * productsByPage - 1

	return products ? (
		<>
			<div className="productlist">
				{products.map((product, key) => {
					if (key > firstProductShowing && key < lastProductShowing) {
						return <ProductListItem product={product} key={key} />
					}
					return ''
				})}
			</div>
			{showModal && (
				<Modal show={showModal} setShow={setShowModal}>
					<ConfirmSwap selectedProduct={selectedProduct} />
					<input />
				</Modal>
			)}
		</>
	) : (
		''
	)
}

export default ProductList
