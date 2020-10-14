import React, { useContext, useEffect } from 'react'
import './App.css'
import Filters from './components/Filters'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Sidebar from './components/Sidebar'
import { AppContext } from './context/AppContext'
import { getProducts } from './data/products'
import { getUser } from './data/user'

function App() {
	const {
		loading,
		setLoading,
		section,
		products,
		setProducts,
		user,
		setUser
	} = useContext(AppContext)

	useEffect(() => {
		const getInitialData = async () => {
			const user = await getUser()
			setUser(user)
			const data = await getProducts()
			setProducts(data)
		}

		setLoading(true)
		getInitialData()
		setLoading(false)
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
				<Sidebar />
				<div className="main">
					<Filters />
					<ProductList loading={loading} products={products} />
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default App
