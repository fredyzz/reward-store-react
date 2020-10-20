import React, {useContext} from 'react'
import {PRODUCTS_BY_PAGE} from '../data/config'
import { AppContext } from '../context/AppContext'


const Pagination = () => {
	const {page, setPage, products} = useContext(AppContext)
	const firstProduct = 
		page * PRODUCTS_BY_PAGE - PRODUCTS_BY_PAGE + 1 < products.length - PRODUCTS_BY_PAGE - 1
		? page * PRODUCTS_BY_PAGE - PRODUCTS_BY_PAGE + 1
		: products.length - PRODUCTS_BY_PAGE + 1

	const lastProduct = page * PRODUCTS_BY_PAGE > products.length ? products.length : page * PRODUCTS_BY_PAGE

	const previuosPage = () => {
		if(page > 1) {
			setPage(page - 1)
		}
		}
	const nextPage = () => {
		if((page + 1) * PRODUCTS_BY_PAGE <= products.length) {
			setPage(page + 1)
		}
		}
	return (
		<div className="pagination">
			<button onClick={previuosPage}>
				<img src={require('../assets/images/left-arrow.svg')} alt="" />
			</button>
			<p>{`${firstProduct} to ${lastProduct}, of ${products.length}products`}</p>
			<button onClick={nextPage}>
				<img src={require('../assets/images/right-arrow.svg')} alt="" />
			</button>
		</div>
	)
}

export default Pagination
