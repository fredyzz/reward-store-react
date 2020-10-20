import React, { useContext, useEffect } from 'react'
import './App.css'
import Filters from './components/Filters'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Sidebar from './components/Sidebar'
import Loader from './assets/utils/Loader'
import { AppContext } from './context/AppContext'
import { getProducts } from './data/products'
import { getUser } from './data/user'
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
		page
	} = useContext(AppContext)


	useEffect(() => {
		const getInitialData = async () => {
			const user = await getUser()
			setUser(user)
			const data = await getProducts()
			setProducts(data)
			setLoading(false)
		}

		setLoading(true)
		getInitialData()
	}, [setLoading, setProducts, setUser])

	return (
		<div className="container">
			<div className="upbar">
				<img src={require('./assets/images/logo.svg')} alt="logo" />
				<div>{`Hello, ${user.name}!`}</div>
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
							<Footer />
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default App
