import React, { useState } from 'react'
// Import data functions

export const AppContext = React.createContext()

export default function AppProvider({ children }) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [user, setUser] = useState({
		username: 'user'
	})
	const [history, setHistory] = useState(null)
	const [section, setSection] = useState('Electronics')
	const [products, setProducts] = useState([])
	const [filteredProducts, setFilteredProducts] = useState(null)
	const [page, setPage] = useState(1)

	return (
		<AppContext.Provider
			value={{
				loading,
				setLoading,
				error,
				setError,
				user,
				setUser,
				section,
				setSection,
				products,
				setProducts,
				filteredProducts,
				setFilteredProducts,
				page,
				setPage,
				history,
				setHistory
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
