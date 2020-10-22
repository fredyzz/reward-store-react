import React, { useContext, useEffect } from 'react'
import './App.css'
import Filters from './components/Filters'
import Pagination from './components/Pagination'
import ProductList from './components/ProductList'
import Sidebar from './components/Sidebar'
import Loader from './assets/utils/Loader'


import { AppContext } from './context/AppContext'
import { getProducts } from './data/products'
import { getUser, getUserHistory } from './data/user'
import { PRODUCTS_BY_PAGE } from './data/config'

function App() {


	  
	const {
		loading,
		setLoading,
		section,
		products,
		filteredProducts,
		setProducts,
		user,
		setUser,
		page,
		setHistory,
		showModal
	} = useContext(AppContext)


	useEffect(() => {
		const getInitialData = async () => {
			const user = await getUser()
			setUser(user)
			const data = await getProducts()
			setProducts(data)
			const historyData = await getUserHistory()
			setHistory(historyData.slice(historyData.length - 8, historyData.length).reverse())
			setLoading(false)
		}

		setLoading(true)
		getInitialData()
	}, [setLoading, setProducts, setUser, setHistory])

	return (
		<div className={showModal ? "modal-open container" : "container"}>
			<div className="upbar">
				<img src={require('./assets/images/logo.svg')} alt="logo" />
				<span>{`Hello, ${user.name}!`}</span>
			</div>
			<div className="header">
				<img src={require('./assets/images/header-x1.png')} alt="banner" />
				<h1>{section}</h1>
			</div>
			<div className="flex-row">
				{loading ? (
					<Loader />
				) : (
					<>
						<Sidebar />
						<div className="main">
							<Filters />
							<ProductList products={filteredProducts ? filteredProducts : products} productsByPage={PRODUCTS_BY_PAGE} page={page}/>
							<Pagination />
						</div>
					</>
				)}
			</div>
			
		</div>
	)
}

export default App
